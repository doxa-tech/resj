class Card < ActiveRecord::Base
  include Wizard
  belongs_to :card_type

  # define the wizard's steps
  def steps
  	["general", "location", "team", "extra", "final"]
  end
end
