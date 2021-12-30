require 'factory_bot'
require_relative '../../../factories.rb'

class Admin::CardMailerPreview < ActionMailer::Preview

  def submit
    card = FactoryBot.build(:card)
    card.id = 1
    Admin::CardMailer.submit(card)
  end

  def deactivated
    card = FactoryBot.build(:card)
    card.id = 1
    Admin::CardMailer.deactivated(card)
  end

end
