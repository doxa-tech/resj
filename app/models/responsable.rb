class Responsable < ActiveRecord::Base
	attr_accessor :is_contact
	
	has_many :cards, as: :contact
	has_many :card_responsables, dependent: :destroy
	has_many :cards, through: :card_responsables

	validates :firstname, presence: true, length: { maximum: 15 }
	validates :lastname, presence: true, length: { maximum: 15 }
	validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }

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
