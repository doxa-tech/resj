class Card < ActiveRecord::Base
  include Wizard
  belongs_to :card_type
  belongs_to :responsable
  has_many :card_responsables
  has_many :responsables, through: :card_responsables
  has_many :card_verifications
  has_many :users, through: :card_verifications

  # define the wizard's steps
  def steps
  	["general", "location", "team", "extra", "final"]
  end
end
