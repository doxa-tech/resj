class Responsable < ApplicationRecord
	attr_accessor :is_contact

	has_many :card_responsables, dependent: :destroy
	has_many :cards, through: :card_responsables

	validates :firstname, presence: true, length: { maximum: 20 }
	validates :lastname, presence: true, length: { maximum: 20 }
	validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }

	before_validation :format

	def full_name
    "#{firstname} #{lastname}"
  end

	private

	def format
		self.firstname = self.firstname.strip.split('-').map(&:capitalize).join('-')
    self.lastname = self.lastname.strip.split('-').map(&:capitalize).join('-')
    self.email = self.email.strip.downcase
	end
end
