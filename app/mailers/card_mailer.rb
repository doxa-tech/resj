class CardMailer < ActionMailer::Base
  default from: "admin@reseaujeunesse.ch"

  def welcome(card)
    mail to:      "nkcr.je@gmail.com",
         from:    "\"Noémien de ResJ\" <admin@reseaujeunesse.ch>",
         subject: 'Bienvenue sur RéseauJeunesse'
    a = 'asd'
    headers['X-MC-MergeVars'] = "{\"TYPE\":\"#{a}\"}" # variables
    headers['X-MC-Template'] = "welcome"  # template
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
end
