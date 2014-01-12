class Affiliation < ActiveRecord::Base
	has_many :card_affiliations
	has_many :card, through: :card_affiliations
end
