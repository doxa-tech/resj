class Card < ActiveRecord::Base
  include Wizard
  belongs_to :card_type
  belongs_to :responsable
  has_many :card_responsables, dependent: :destroy
  has_many :responsables, through: :card_responsables
  has_many :card_verifications, dependent: :destroy
  has_many :users, through: :card_verifications
  has_many :card_affiliations, dependent: :destroy, autosave: true
  has_many :affiliations, through: :card_affiliations, autosave: true
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :verificator_comments
  belongs_to :card
  has_one :card

  accepts_nested_attributes_for :responsables, :allow_destroy => true
  accepts_nested_attributes_for :affiliations, :allow_destroy => true

  validate :verified?
  with_options if: Proc.new { |c| c.current_step?("team")} do |team|
    #team.validate :contact?
  end

  before_save :assign_responsable

  searchable do
    text :name, boost: 5
    text :description
    string :tags, multiple: true do
      tags.map { |a| a.name }
    end
  end

  mount_uploader :avatar, AvatarUploader
  mount_uploader :banner, BannerUploader

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

  # Methods called before card's associations are saved (bound to accepts_nested_attributes_for)
  # Find a responsable or create a new one 
  def autosave_associated_records_for_responsables
    new_responsables = []
    responsables.select{ |r| r.new_record? }.each do |responsable|
      new_responsables << Responsable.where('firstname = ? AND lastname = ? AND email = ?', responsable.firstname, responsable.lastname, responsable.email).first_or_create
    end
    self.responsables = new_responsables
  end

  def autosave_associated_records_for_affiliations
    new_affiliations = []
    affiliations.select{ |a| a.new_record? }.each do |affiliation|
      new_affiliations << Affiliation.where('name = ?', affiliation.name).first_or_create
    end
    self.affiliations = new_affiliations
  end

  def current_step?(step)
    current_step.nil? || current_step == step
  end

  private

  def verified?
    if validated == true && CardVerification.where('card_id = ?', id).count < 3
      errors.add(:validated, I18n.t('card.admin.validated_error') )
    end
  end

  def contact?
    if responsables && !responsables.select{ |r| r.is_contact == "true" }.any?
      errors.add(:responsable, "has no contact" )
    end
  end

  def assign_responsable
    if contact = responsables.select{ |r| r.is_contact == "true"}.first
      if new_contact = Responsable.where('firstname = ? AND lastname = ? AND email = ?', contact.firstname, contact.lastname, contact.email).first
        self.responsable_id = new_contact.id
      else
        contact.save!
        self.responsable_id = contact.id
      end
    end
  end
end
