class Status < ApplicationRecord

	has_many :cards

	validates :name, presence: true, length: { maximum: 30 }

  after_update { self.cards.each(&:touch) }

end
