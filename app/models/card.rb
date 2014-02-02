class Card < ActiveRecord::Base
  include Wizard
  belongs_to :card_type
  belongs_to :responsable
  has_many :card_responsables, dependent: :destroy
  has_many :responsables, through: :card_responsables
  has_many :card_verifications, dependent: :destroy
  has_many :users, through: :card_verifications
  has_many :card_affiliations, dependent: :destroy
  has_many :affiliations, through: :card_affiliations
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :verificator_comments

  accepts_nested_attributes_for :responsables, :allow_destroy => true, :reject_if => lambda { |a| a[:lastname].blank? || a[:firstname].blank? || a[:email].blank?}
  accepts_nested_attributes_for :responsable
  accepts_nested_attributes_for :affiliations, :allow_destroy => true, :reject_if => lambda { |a| a[:name].blank? }

  #validates :name, presence: true, uniqueness: true, length: { maximum: 15 }
  validate :verified?

  searchable do
    text :name, boost: 5
    text :description
    string :tags, multiple: true do
      tags.map { |a| a.name }
    end
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

  # Methods called before card's associations are saved (bound to accepts_nested_attributes_for)
  # Find a responsable or create a new one 
  def autosave_associated_records_for_responsables
    responsables.each do |responsable|
      if new_responsable = Responsable.where('firstname = ? AND lastname = ? AND email = ?', responsable.firstname, responsable.lastname, responsable.email).first
        self.responsables << new_responsable
      else
        self.responsables << responsable
      end
    end
  end

  def autosave_associated_records_for_responsable
    unless responsable.nil?
      if new_responsable = Responsable.where('firstname = ? AND lastname = ? AND email = ?', responsable.firstname, responsable.lastname, responsable.email).first
        self.responsable = new_responsable
     else
        self.responsable.save!
        self.responsable_id = self.responsable.id
      end
    end
  end

  def autosave_associated_records_for_affiliations
    affiliations.each do |affiliation|
      if new_affiliation = Affiliation.where('name = ?', affiliation.name).first
        self.affiliations << new_affiliation
      else
        self.affiliations << affiliation
      end
    end
  end

  private

  def verified?
    if validated == true && CardVerification.where('card_id = ?', id).count < 3
      errors.add(:validated, I18n.t('card.admin.validated_error') )
    end
  end

end
