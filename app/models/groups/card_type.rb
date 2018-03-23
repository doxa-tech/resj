class CardType < ApplicationRecord
	has_many :cards

	validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

end
