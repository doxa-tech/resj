class Card < ActiveRecord::Base
  include Wizard
  belongs_to :card_type

  def steps
  	["general", "location", "team", "extra", "final"]
  end
end
