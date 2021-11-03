require 'factory_bot'
require_relative '../../factories.rb'

class CardMailerPreview < ActionMailer::Preview

  def submit
    card = FactoryBot.build(:card)
    CardMailer.submit(card)
  end

  def transfered
    card = FactoryBot.build(:card)
    CardMailer.transfer(card, card.user)
  end

  def received
    card = FactoryBot.build(:card)
    CardMailer.received(card, card.user)
  end

end
