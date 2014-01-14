class Card < ActiveRecord::Base
  include Wizard
  belongs_to :card_type
  belongs_to :responsable
  has_many :card_responsables
  has_many :responsables, through: :card_responsables
  has_many :card_verifications
  has_many :users, through: :card_verifications
  has_many :card_affiliations
  has_many :affiliations, through: :card_affiliations

  accepts_nested_attributes_for :responsables, :allow_destroy => true, :reject_if => lambda { |a| a[:lastname].blank? || a[:firstname].blank? || a[:email].blank?}
  accepts_nested_attributes_for :responsable
  accepts_nested_attributes_for :affiliations, :allow_destroy => true, :reject_if => lambda { |a| a[:name].blank? }

  #validates :name, presence: true, uniqueness: true, length: { maximum: 15 }
  validate :verified?

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
    if new_responsable = Responsable.where('firstname = ? AND lastname = ? AND email = ?', responsable.firstname, responsable.lastname, responsable.email).first
      self.responsable = new_responsable
    else
      self.responsable.save!
      self.responsable_id = self.responsable.id
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
