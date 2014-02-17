class CardType < ActiveRecord::Base
	has_many :cards

	validates :name, presence: true, length: { maximum: 15 }, uniqueness: true
end
