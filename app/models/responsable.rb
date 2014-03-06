class Responsable < ActiveRecord::Base
	attr_accessor :is_contact
	
	has_many :card_responsables, dependent: :destroy
	has_many :cards, through: :card_responsables

	validates :firstname, presence: true, length: { maximum: 30 }
	validates :lastname, presence: true, length: { maximum: 30 }
	validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }

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
