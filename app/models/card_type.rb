class CardType < ActiveRecord::Base
	has_many :cards

	validates :name, presence: true, length: { maximum: 25 }, uniqueness: true
end
