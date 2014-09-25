class Card < ActiveRecord::Base
  include Wizard
  attr_writer :tag_names

  scope :regional, -> { joins(:card_type).where(card_types: {name: "Réseau régional"}) }
  scope :with_card_type, -> { includes(:card_type) }
  scope :active, -> { joins(:status).where(statuses: { name: "En ligne"}) }

  belongs_to :card_type
  belongs_to :user
  has_many :card_responsables, dependent: :destroy
  has_many :responsables, through: :card_responsables
  has_many :card_verifications, dependent: :destroy
  has_many :users, through: :card_verifications
  has_many :card_affiliations, dependent: :destroy
  has_many :affiliations, through: :card_affiliations
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :verificator_comments
  has_many :card_users
  has_many :users, through: :card_users
  belongs_to :location
  has_many :card_parents
  has_many :cards, through: :card_parents
  has_many :parents, through: :card_parents
  belongs_to :status

  accepts_nested_attributes_for :responsables, :users, :allow_destroy => true, reject_if: proc { |a| a[:firstname].blank? && a[:lastname].blank? && a[:email].blank? }
  accepts_nested_attributes_for :affiliations, :allow_destroy => true, reject_if: proc { |a| a[:name].blank? }
  accepts_nested_attributes_for :users, :allow_destroy => true

  with_options if: Proc.new { |c| c.current_step?("general")} do |card|
    card.validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
    card.validates :description, presence: true, length: { maximum: 800 }
    card.validates :card_type_id, presence: true
  end
  with_options if: Proc.new { |c| c.current_step?("location")} do |card|
    card.validates :street, presence: true
    card.validates :location_id, presence: true
    card.validates :place, length: { maximum: 60 }
    card.validates :latitude, presence: true
    card.validates :longitude, presence: true
  end
  with_options if: Proc.new { |c| c.current_step?("team")} do |card|
    card.validate :responsables?
    card.validate :contact?
    card.validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, :allow_blank => true
  end

  searchable do
    text :name, boost: 5
    text :description
    integer :card_type_id, multiple: true
    integer :canton_ids, multiple: true
    integer :tag_ids, multiple: true
  end

  mount_uploader :avatar, AvatarUploader
  mount_uploader :banner, BannerUploader

  after_save :assign_tags
  before_save :format_url

  def to_param
    "#{id}-#{name}".parameterize
  end

  def canton_ids
    location.canton.id
  end

  def tag_ids
    tags.pluck(:id)
  end

  def unconfirmed_users
    card_users.where(card_validated: nil, user_validated: true)
  end

  def confirmed_users
    User.joins(:card_users).where(card_users: {user_validated: true, card_validated: true, card_id: id} ) << user
  end

  def tag_names
    @tag_names || tags.map(&:name).join(' ')
  end

  # define the wizard's steps
  def steps
  	["general", "location", "team", "extra", "final"]
  end

  # Methods called before card's associations are saved (bound to accepts_nested_attributes_for)
  # Find a responsable or create a new one 
  def autosave_associated_records_for_responsables
    new_responsables = []
    responsables.reject{ |r| r.is_contact == "true" }.each do |responsable|
      if user = User.find_by_email(responsable.email) 
        CardUser.create(user_id: user.id, card_id: id, card_validated: true)
      else
        new_responsables << Responsable.where(firstname: responsable.firstname, lastname: responsable.lastname, email: responsable.email).first_or_create
      end
    end
    self.responsables = new_responsables
  end

  def autosave_associated_records_for_affiliations
    new_affiliations = []
    affiliations.each do |affiliation|
      new_affiliations << Affiliation.where(name: affiliation.name).first_or_create
    end
    self.affiliations = new_affiliations
  end

  def current_step?(step)
    current_step.nil? || current_step == step || current_step == "final"
  end

  def create_owner(owner)
    actions = Action.where(name: ["user_request", "user_confirmation"])
    password = ""; new_user = false
    if card_user = User.find_by_email(owner.email)
      self.user = card_user
      Ownership.create(user_id: card_user.id, element_id: Element.find_by_name('cards').id, ownership_type_id: OwnershipType.find_by_name('on_entry').id, id_element: id, right_read: true, right_update: true, right_create: true, actions: actions)
    else
      password = SecureRandom.hex(8)
      card_user = User.create(firstname: owner.firstname, lastname: owner.lastname, email: owner.email, password: password, password_confirmation: password, user_type: UserType.find_by_name('user'))
      UserMailer.confirmation(card_user).deliver
      Ownership.create(user_id: card_user.id, element_id: Element.find_by_name('cards').id, ownership_type_id: OwnershipType.find_by_name('on_entry').id, id_element: id, right_read: true, right_update: true, right_create: true, actions: actions)
      new_user = true
      self.user = card_user
    end
    save
    return {new_user?: new_user, password: password}
  end

  # used for in-place editing in card overview
  # params :
  # - attribute (String), name of attribute updated
  # - value, value of attribute updated
  def updated_attribute_value(attribute, value)
    case attribute
    when 'location_id'
      return Location.find(value).full_name
    when 'card_type_id'
      return CardType.find(value).name
    when 'parent_ids'
      return parents_list
    end
    return value
  end

  def parents_list
    return self.parents.inject(''){|i, a| "#{i}, #{a.name}"}[1..-1]
  end

  private

  def contact?
    if new_record? && responsables.any? && !responsables.select{ |r| r.is_contact == "true" }.any?
      errors.add(:responsables, "n'a pas de propriétaire (Marquer comme propriétaire)" )
    end
  end

  def responsables?
    if new_record? && !responsables.any?
      errors.add(:responsables, "ne contient aucun responsable (min. 1)")
    end
  end

  def assign_tags
    current_tags = []
    tag_names.split(' ').each do |tag|
      if new_tag = Tag.find_by_name(tag)
        new_tag.update_attribute(:popularity, new_tag.popularity + 1)
        current_tags << new_tag
      else
        current_tags << Tag.create(name: tag)
      end
    end
    self.tags = current_tags
  end

  def format_url
    if(!self.website.blank?)
      self.website = "http://#{self.website}" unless self.website[/^https?/]    
    end
  end

end