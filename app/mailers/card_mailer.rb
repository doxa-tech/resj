class CardMailer < BaseMailer
  #
  # New card process
  #

  # your card was created successfully
  def owner_created(card, user_hash)
    template = (user_hash[:new_user?]) ? "card-created-owner-new" : "card-created-owner-exist"
    mail to:      card.user.email,
         subject: 'Nouveau groupe sur le réseau jeunesse',
         body:
    params({ TYPE: card.card_type.name, NAME: card.user.firstname,
             GNAME: card.name,
             PASSWD: user_hash[:password] })
    template template  # template
  end

  # a new card has been created, let's validate!
  def admin_created(emails, card)
    mail to:      emails,
         subject: 'Validation d\'une carte',
         body:
    params({ TYPE: card.card_type.name,
             GNAME: card.name,
             LINK: edit_admin_card_url(card, locale: I18n.locale) })
    template "card-created-admin"  # template
  end

  # card has been validated (so you can verified)
  def admin_validated(checkers, card)
  	@checkers = checkers
    mail to:      @checkers.pluck(:email),
         subject: 'Vérification d\'une carte',
         body:
    params({ TYPE: card.card_type.name,
             GNAME: card.name,
             LINK: edit_admin_card_url(card, locale: I18n.locale) })
    template "card-validated-admin"  # template
  end

  # card has been verified (so it is published)
  def admin_verified(card_admins, card)
  	@card_admins = card_admins
    mail to:      @card_admins.pluck(:email),
         subject: 'Nouvelle care',
         body:
    params({ TYPE: card.card_type.name,
             GNAME: card.name,
             LINK: card_url(card, locale: I18n.locale) })
    template "card-verified-admin"  # template
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

  # your card has changed its status
  def changed_status(card, status, old_status, infos)
    mail  to:      card.user.email,
          subject: "Mise à jour de votre #{card.card_type.name}",
          body:
    params({ STATUS: status.name,
             OLD_STATUS: old_status.name, 
             INFOS: infos,
             NAME: card.user.firstname, 
             TYPE: card.card_type.name })
    template "card-#{status.name.parameterize}"
  end

  private

  def s(string)
    string.gsub /"/
  end
end
