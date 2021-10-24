require 'factory_bot'
require_relative '../../factories.rb'

class CardMailerPreview < ActionMailer::Preview

  def submit
    card = FactoryBot.build(:card)
    CardMailer.submit(card)
  end

end
