class Card < ActiveRecord::Base
  include Wizard

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
  belongs_to :card
  has_one :card

  accepts_nested_attributes_for :responsables, :users, :allow_destroy => true
  accepts_nested_attributes_for :affiliations, :allow_destroy => true, reject_if: proc { |a| a[:name].blank? }

  with_options if: Proc.new { |c| c.current_step?("general")} do |card|
    card.validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
    card.validates :description, presence: true, length: { maximum: 600 }
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

  def to_param
    "#{id}-#{name}".parameterize
  end

  def canton_ids
    location.canton.id
  end

  def tag_ids
    tags.pluck(:id)
  end

  def unconfirmed_card
    card_users.where(card_validated: nil)
  end

  def tag_names
    @tag_names || tags.map(&:name).join(' ')
  end

  def tag_names=(tags)
    current_tags = []
    tags.split(' ').each do |tag|
      if new_tag = Tag.find_by_name(tag)
        new_tag.update_attribute(:popularity, new_tag.popularity + 1)
        current_tags << new_tag
      else
        current_tags << Tag.create(name: tag)
      end
    end
    self.tags = current_tags
  end

  # define the wizard's steps
  def steps
  	["general", "location", "team", "extra", "final"]
  end

  def verified?
    card_verifications.count >= 3
  end

  # Methods called before card's associations are saved (bound to accepts_nested_attributes_for)
  # Find a responsable or create a new one 
  def autosave_associated_records_for_responsables
    new_responsables = []
    responsables.each do |responsable|
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
    current_step.nil? || current_step == step
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

  private

  def contact?
    if new_record? && responsables.any? && !responsables.select{ |r| r.is_contact == "true" }.any?
      errors.add(:responsable, "has no contact" )
    end
  end
end
