class Responsable < ActiveRecord::Base
	has_many :cards
	has_many :card_responsables
	has_many :cards, through: :card_responsables

	validates :firstname, presence: true
	validates :lastname, presence: true
	validates :email, presence: true

	after_validation :format

	private

	def format
		self.firstname.try(:strip!)
		self.lastname.try(:strip!)
		self.email.try(:strip!)
		self.firstname.try(:capitalize!)
		self.lastname.try(:capitalize!)
		self.email.try(:downcase!)
	end
end
