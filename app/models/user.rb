class User < ActiveRecord::Base
	attr_accessor :current_password

	has_secure_password({ validations: false })

  belongs_to :user_type
  has_many :card_verifications
  has_many :cards, through: :card_verifications
  has_many :ownerships

  before_update :authenticate
  before_save :format

  private

  # Control by an update if the current_password is right
  def authenticate
  	errors.add(:current_password, "Does not match password") unless self.authenticate(current_password)
  end

  # Remove spaces and capitales
  def format
    self.email = self.email.strip.downcase
    self.name = self.name.strip
  end
end
