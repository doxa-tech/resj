require 'factory_bot'
require_relative '../../factories.rb'

class CardMailerPreview < ActionMailer::Preview

  def submit
    card = FactoryBot.build(:card)
    CardMailer.submit(card)
  end

  def transfered
    card = FactoryBot.build(:card)
    card.id = 1
    CardMailer.transfered(card, card.user)
  end

  def received
    card = FactoryBot.build(:card)
    card.id = 1
    CardMailer.received(card, card.user)
  end

  def online
    card = FactoryBot.build(:card)
    card.id = 1
    CardMailer.online(card, "Le groupe est complet !")
  end

  def offline
    card = FactoryBot.build(:card)
    card.id = 1
    CardMailer.offline(card, "Il manque une description complète")
  end

  def update_check
    card = FactoryBot.build(:card)
    card.id = 1
    card.last_updated = Time.current - 6.month
    CardMailer.update_check(card, 7)
  end
  
  def migration
    user = FactoryBot.build(:user)
    CardMailer.migration(user)
  end

end
