class User < ActiveRecord::Base
	attr_accessor :current_password

	has_secure_password({ validations: false })

  scope :users, -> { joins(:user_type).where(user_types: {name: "user"}).readonly(false) }

  belongs_to :user_type
  has_many :card_verifications, dependent: :destroy
  has_many :cards, through: :card_verifications
  has_many :ownerships
  has_many :parents, dependent: :destroy
  has_many :users, through: :parents
  has_many :verificator_comments
  has_many :activities
  has_many :card_users, dependent: :destroy
  has_many :cards, through: :card_users
  has_one :orator, dependent: :destroy
  has_many :cards
  has_many :articles
  has_many :connections

  accepts_nested_attributes_for :orator

  with_options unless: :is_group? do |user|
    user.validates :firstname, presence: true, length: { maximum: 15 }
    user.validates :lastname, presence: true, length: { maximum: 15 }
    user.validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, uniqueness: true
    user.validates :gravatar_email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, on: :update?
    user.validate :match_current_password

    user.after_validation :format
    user.before_save :create_remember_token
    user.before_create :assign_gravatar
  end
  validates :password, presence: true, length: { minimum: 5 }, confirmation: true, :unless => lambda { |v| v.validate_password? || v.is_group? }

  def send_password_reset
    self.reset_token =  SecureRandom.urlsafe_base64
    self.reset_sent_at = Time.zone.now
    save!
    # sends reset link
    UserMailer.password_reset(self).deliver
  end

  def full_name
    "#{firstname} #{lastname}"
  end

  def validate_password?
    password.blank? && password_confirmation.blank? && !self.new_record?
  end

  def is_group?
    user_type_id == UserType.find_by_name('group').id
  end

  def gravatar(size = 100)
    default_url = URI.escape "identicon"
    if self.gravatar_email
      "http://gravatar.com/avatar/#{Digest::MD5.hexdigest(self.gravatar_email.downcase)}.png?d=#{default_url}&s=#{size}"
    else
      "http://gravatar.com/avatar/#{Digest::MD5.hexdigest('no')}.png?d=#{default_url}&s=#{size}"
    end
  end

    def gravatar?
    if seflf.gravatar_email && Rails.env.production?
      gravatar_check = "http://gravatar.com/avatar/#{Digest::MD5.hexdigest(selft.gravatar_email.downcase)}.png?d=404"
      uri = URI.parse(gravatar_check)
      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Get.new(uri.request_uri)
      response = http.request(request)
      if (response.code.to_i == 404)
        return false
      else
        return true
      end 
    else
      return false 
    end
  end

  private

  # Control by an update if the current_password is right
  def match_current_password
    if current_password && !self.authenticate(current_password)
  		errors.add(:current_password, "does not match password")
    end
  end

  # Remove spaces and capitales
  def format
    self.firstname.strip!
    self.lastname.strip!
    self.email.strip
    self.firstname.capitalize!
    self.lastname.capitalize!
    self.email.downcase!
  end

  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end

  def assign_gravatar
    self.gravatar_email = self.email
  end
end
