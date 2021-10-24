class Contact
  include ActiveModel::Model

  # contact form fields
  attr_accessor :email, :message, :verification
  
  # store the destination email for the contact form 
  attr_writer :destination

  validates :message, :email, :verification, presence: true
  validates :email, format: { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }

  def destination
    Rails.env.production? ? @destination : "kocher.ke@gmail.com"
  end

end
