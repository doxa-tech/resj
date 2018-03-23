class Canton < ApplicationRecord
	has_many :locations

  after_update { self.locations.each { |l| l.cards.each(&:touch) } }
end
