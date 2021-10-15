require 'factory_bot'
require_relative '../../factories.rb'

class UserMailerPreview < ActionMailer::Preview
  def confirmation
    user = FactoryBot.build(:user)
    UserMailer.confirmation(user)
  end

  def password_reset
    user = FactoryBot.build(:user)
    UserMailer.password_reset(user)
  end
end
