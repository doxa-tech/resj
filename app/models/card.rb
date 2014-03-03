class Card < ActiveRecord::Base
  include Wizard

  belongs_to :card_type
  belongs_to :contact, polymorphic: true
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
    card.validates :name, presence: true, length: { maximum: 25 }, uniqueness: true
    card.validates :description, presence: true, length: { maximum: 500 }
    card.validates :card_type_id, presence: true
  end
  with_options if: Proc.new { |c| c.current_step?("location")} do |card|
    card.validates :street, presence: true
    card.validates :location_id, presence: true
    card.validates :place, presence: true, length: { maximum: 25 }
    card.validates :latitude, presence: true
    card.validates :longitude, presence: true
  end
  with_options if: Proc.new { |c| c.current_step?("team")} do |card|
    card.validate :contact?
    card.validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, :allow_blank => true
  end

  before_save :assign_responsable

  searchable do
    text :name, boost: 5
    text :description
    integer :card_type_id, multiple: true
    integer :canton_ids, multiple: true
    integer :tag_ids, multiple: true
  end

  mount_uploader :avatar, AvatarUploader
  mount_uploader :banner, BannerUploader

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

  private

  def contact?
    if responsables && !responsables.select{ |r| r.is_contact == "true" }.any?
      errors.add(:responsable, "has no contact" )
    end
  end

  def assign_responsable
    if p_contact = responsables.select{ |r| r.is_contact == "true"}.first
      if user = User.find_by_email(p_contact.email)
        self.contact = user
      else
        self.contact = Responsable.where(firstname: p_contact.firstname, lastname: p_contact.lastname, email: p_contact.email).first_or_create
      end
    end
  end
end
