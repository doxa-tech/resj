class Contact
  include ActiveModel::Model

  # contact form fields
  attr_accessor :email, :message, :verification
  
  # store the destination email for the contact form 
  attr_writer :destination

  validates :message, :email, :verification, presence: true
  validates :email, format: { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }
  validate :verification_is_correct

  def destination
    Rails.env.development? ? "kocher.ke@gmail.com" : @destination
  end

  private

  # the verification question is 2+2
  def verification_is_correct
    if verification.strip != "4"
      errors.add(:base, "La vérification a échouée")
    end
  end

end
