class CardMailer < ActionMailer::Base
  default from: "admin@reseaujeunesse.ch"

  def welcome(card)
    mail to:      card.email,
         from:    'admin@reseaujeunesse.ch',
         subject: 'Bienvenue sur ReseauJeunesse'

    headers['X-MC-MergeVars'] = '{"TYPE": "#{card.card_type.name}"}'
    headers['X-MC-Template'] = "welcome"
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
