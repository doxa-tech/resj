class AccessToken < ApplicationRecord
  belongs_to :ownership

  validates :ownership_id, presence: true
  validates :exp_at, presence: true

  before_create :generate_token

  def generate_token
  	self.token = SecureRandom.urlsafe_base64
  end

  def is_valid?
    exp_at > Time.now && is_valid
  end
end
