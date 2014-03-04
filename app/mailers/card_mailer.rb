require 'json'

class CardMailer < ActionMailer::Base
  default from: "admin@reseaujeunesse.ch"

  def welcome(card)
    mail to:      card.contact.email,
         from:    "\"Noémien de ResJ\" <admin@reseaujeunesse.ch>",
         subject: 'Nouveau groupe sur réseauJeunesse.ch',
         body:
    headers['X-MC-MergeVars'] = {
                                  TYPE: card.card_type.name,
                                  NAME: card.name,
                                  DATE: card.created_at
                                }.to_json # variables
    headers['X-MC-Template'] = "welcome2"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  def created(validator)
  	@validator = validator
  	mail to: validator.email, subject: "New card submitted !"
  end

  def validated(checkers)
  	@checkers = checkers
  	mail to: checkers.pluck(:email), subject: "New card validated"
  end

  def verified(card_admins)
  	@card_admins = card_admins
  	mail to: card_admins.pluck(:email), subject: "Card verified"
  end

  private

  def s(string)
    string.gsub /"/
  end
end
