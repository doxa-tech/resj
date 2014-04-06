require 'json'

class CardMailer < ActionMailer::Base
  default from: "admin@reseaujeunesse.ch"

  #
  # New card process
  #

  # your card was created successfully
  def owner_created(card, user_hash)
    template = (user_hash[:new_user?]) ? "card-created-owner-new" : "card-created-owner-exist"
    mail to:      card.user.email,
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Nouveau groupe sur le réseau jeunesse',
         body:
    headers['X-MC-MergeVars'] = {
                                  TYPE: card.card_type.name,
                                  NAME: card.user.firstname,
                                  GNAME: card.name,
                                  PASSWD: user_hash[:password]
                                }.to_json # variables
    headers['X-MC-Template'] = template  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  # a new card has been created, let's validate!
  def admin_created(validator, card)
  	@validator = validator
    mail to:      @validator.email,
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Validation d\'une carte',
         body:
    headers['X-MC-MergeVars'] = {
                                  TYPE: card.card_type.name,
                                  GNAME: card.name,
                                  LINK: edit_admin_card_url(card, locale: I18n.locale)
                                }.to_json # variables
    headers['X-MC-Template'] = "card-created-admin"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  # card has been validated (so you can verified)
  def admin_validated(checkers, card)
  	@checkers = checkers
    mail to:      @checkers.pluck(:email),
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Vérification d\'une carte',
         body:
    headers['X-MC-MergeVars'] = {
                                  TYPE: card.card_type.name,
                                  GNAME: card.name,
                                  LINK: edit_admin_card_url(card, locale: I18n.locale)
                                }.to_json # variables
    headers['X-MC-Template'] = "card-validated-admin"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  # card has been verified (so it is published)
  def admin_verified(card_admins, card)
  	@card_admins = card_admins
    mail to:      @card_admins.pluck(:email),
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Nouvelle care',
         body:
    headers['X-MC-MergeVars'] = {
                                  TYPE: card.card_type.name,
                                  GNAME: card.name,
                                  LINK: card_url(card, locale: I18n.locale)
                                }.to_json # variables
    headers['X-MC-Template'] = "card-verified-admin"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  # hey owner, your card is now online
  def owner_verified(owner)
  end

  # hey guys, you are now part of a new group!
  def team_verified(users, responsables)
  end

  #
  # User joining card process
  #

  # someone wants to join your card
  def request(user, card)
  end

  # user you invited accepted to join
  def confirmed_user(user, card)
  end

  # user you invited didn't aceppt to join
  def unconfirmed_user(user, card)
  end

  private

  def s(string)
    string.gsub /"/
  end
end
