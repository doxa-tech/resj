class Affiliation < ActiveRecord::Base
	has_many :card_affiliations, dependent: :destroy
	has_many :cards, through: :card_affiliations
end
