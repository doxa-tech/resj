class Affiliation < ApplicationRecord
	has_many :card_affiliations, dependent: :destroy
	has_many :cards, through: :card_affiliations

	validates :name, presence: true, length: { maximum: 70 }
end
