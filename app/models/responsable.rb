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
		self.firstname.strip!
		self.lastname.strip!
		self.email.strip!
		self.firstname.capitalize!
		self.lastname.capitalize!
		self.email.downcase!
	end
end
