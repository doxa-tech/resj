module UserValidation
	extend ActiveSupport::Concern

	included do
    with_options unless: :is_group? do |user|
	    user.validates :firstname, presence: true, length: { maximum: 20 }
	    user.validates :lastname, presence: true, length: { maximum: 20 }
	    user.validates :email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, uniqueness: true
	    user.validates :gravatar_email, :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }, on: :update?
	    user.validate :avatar_presence?

	    user.before_save :create_remember_token, :format
	    user.before_create :assign_gravatar
	  end
	  validates :password, presence: true, length: { minimum: 5 }, confirmation: true, :unless => lambda { |v| v.validate_password? || v.is_group? }
	end

	def validate_password?
    password.blank? && password_confirmation.blank? && !self.new_record?
  end

  def is_group?
    user_type_id == UserType.find_by_name('group').id
  end

  private 

  def avatar_presence?
    if avatar_url.nil? && gravatar == false
      errors.add(:avatar, 'est vide. Merci de sélectionner une image à uploader avant de décocher l\'option "Utiliser gravatar ?" ou recocher l\'option.')
    end
  end

  # Remove spaces and capitales
  def format
    self.firstname = self.firstname.strip.split('-').map(&:capitalize).join('-')
    self.lastname = self.lastname.strip.split('-').map(&:capitalize).join('-')
    self.email = self.email.downcase
  end

  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end

  def assign_gravatar
    self.gravatar_email = self.email
  end
end