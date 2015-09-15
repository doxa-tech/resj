class Card < ActiveRecord::Base
  include AutosaveAssociatedRecords
  include Wizard
  include CardValidation
  include CardSearch
  attr_writer :tag_names

  scope :regional, -> { joins(:card_type).where(card_types: {name: "Réseau régional"}) }
  scope :with_card_type, -> { includes(:card_type) }
  scope :active, -> { joins(:status).where(statuses: { name: "En ligne" }) }

  belongs_to :card_type
  belongs_to :user # owner of the card
  belongs_to :location
  belongs_to :status

  has_many :card_affiliations, dependent: :destroy
  has_many :affiliations, through: :card_affiliations

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings, after_remove: :update_index

  has_many :verificator_comments

  # Card's responsables (Responsable)
  has_many :card_responsables, dependent: :destroy
  has_many :responsables, through: :card_responsables

  # Card's signed up responsables (User)
  has_many :card_users, dependent: :destroy
  has_many :users, through: :card_users

  # Card belongs to local networks -> .parents
  # Local network has many cards -> .inverse_parents
  has_many :card_parents, dependent: :destroy
  has_many :parents, through: :card_parents
  has_many :inverse_card_parents, :class_name => "CardParent", :foreign_key => "parent_id", dependent: :destroy
  has_many :inverse_parents, :through => :inverse_card_parents, :source => :card

  mount_uploader :avatar, LogoUploader
  mount_uploader :banner, BannerUploader

  after_save :assign_tags
  after_destroy :destroy_ownerships

  accepts_nested_attributes_for :responsables, :users, :allow_destroy => true, reject_if: proc { |a| a[:firstname].blank? && a[:lastname].blank? && a[:email].blank? }
  accepts_nested_attributes_for :affiliations, :allow_destroy => true, reject_if: proc { |a| a[:name].blank? }

  def to_param
    "#{id}-#{name}".parameterize
  end

  # Users requests to a card
  def unconfirmed_users
    User.joins(:card_users).where(card_users: {user_validated: true, card_validated: nil, card_id: id})
  end

  # Users affiliations
  def confirmed_users
    User.joins(:card_users).where(card_users: {user_validated: true, card_validated: true, card_id: id} ) << user
  end

  # Users request from a card and not answered
  def pending_users
    User.joins(:card_users).where(card_users: {user_validated: nil, card_validated: true, card_id: id})
  end

  def tag_names
    @tag_names ||= tags.map(&:name).join(' ')
  end

  # define the wizard's steps
  def steps
  	["general", "location", "team", "extra", "final"]
  end

  def current_step?(step)
    current_step.nil? || current_step == step || current_step == "final"
  end

  # Methods called before card's associations are saved (bound to accepts_nested_attributes_for)
  # Find a responsable or create a new one
  def autosave_associated_records_for_responsables
    self.responsables = filter_responsables
    CardMailer.team_welcome(self).deliver_now if new_record?
  end

  def filter_responsables
    responsables.reject{ |r| r.is_contact == "true" || r._destroy == true}.map do |responsable|
      find_or_create_responsable(responsable)
    end.compact
  end

  def find_or_create_responsable(responsable)
    if user = User.users.find_by_email(responsable.email)
      CardUser.where(user_id: user.id, card_id: id).first_or_create(card_validated: true)
      nil
    else
      Responsable.find_or_create_by(firstname: responsable.firstname, lastname: responsable.lastname, email: responsable.email)
    end
  end

  def autosave_associated_records_for_affiliations
    self.affiliations = find_or_create_related(Affiliation, affiliations)
  end

  def owner=(owner)
    card_user, new_user, password = find_or_create_owner(owner)
    self.update_attribute(:user, card_user)
    Ownership.add(user: card_user, element: "cards", type: "on_entry", id_element: id, right_read: true, right_update: true, right_create: true)
    Ownership.add(user: card_user, element: "cards/affiliations", type: "on_entry", id_element: id,
      right_create: true, right_delete: true, right_update: true, right_read: true)
    CardMailer.owner_created(self, new_user, password).deliver_now
  end

  def find_or_create_owner(owner)
    card_user = User.find_by_email(owner.email)
    new_user = if card_user.nil?
      password = SecureRandom.hex(8)
      card_user = User.create(firstname: owner.firstname, lastname: owner.lastname, email: owner.email, password: password, password_confirmation: password, user_type: UserType.find_by_name('user'))
      UserMailer.confirmation(card_user).deliver_now
    end
    return card_user, new_user.present?, password || nil
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

  # Used by mapbox to identify network markers
  def network?
    self.card_type.name == "Réseau régional" ? 1 : 0
  end

  def network_members_coords
    inverse_parents.map do |parent|
      [[latitude, longitude], [parent.latitude, parent.longitude]]
    end.flatten(1)
  end

  private

  def assign_tags
    self.tags = tag_names.split(' ').map do |tag|
      tag = Tag.where(name: tag.strip).first_or_create!
      tag.update_column(:popularity, tag.popularity + 1)
      tag
    end
  end

  def destroy_ownerships
    Ownership.joins(:element).where(elements: {name: ['cards', 'admin/cards', 'cards/affiliations']}, id_element: id).destroy_all
  end

end
