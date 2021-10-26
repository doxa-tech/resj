class User < ApplicationRecord

  has_secure_password

  has_many :cards
  has_one :orator, dependent: :destroy

  before_save :create_remember_token
  before_create :create_uuid
  before_validation :assign_gravatar_email

  validates :firstname, presence: true, length: { maximum: 50 }
  validates :lastname, presence: true, length: { maximum: 50 }
  validates :email, format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,}\z/ }, uniqueness: true
  validates :gravatar_email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,}\z/ }, on: :update

  # password reset
  validates :password, presence: true, on: :reset

  def update_with_password(current_password, params)
    authenticated = authenticate(current_password)
    assign_attributes(params)
    if valid? && authenticated
      save
      true
    else
      errors.add(:current_password, "ne correspond pas") unless authenticated
      false
    end
  end

  private

  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end

  def create_uuid
    self.uuid = SecureRandom.uuid
  end

  def assign_gravatar_email
    self.gravatar_email = email
  end

end
