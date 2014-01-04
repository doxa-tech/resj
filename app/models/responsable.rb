class Responsable < ActiveRecord::Base
	has_one :card
	has_many :card_responsables
	has_many :cards, through: :card_responsables
end
