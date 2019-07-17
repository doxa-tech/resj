class User < ApplicationRecord

  has_secure_password

  has_many :cards
  has_one :orator

  before_save :create_remember_token

  private

  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end

end
