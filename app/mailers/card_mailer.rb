class CardMailer < BaseMailer

  #
  # New card process
  #

  # your card was created successfully
  def owner_created(card, new_user, password)
    @name = User.last.firstname
    @gname = card.name
    @type = card.card_type.name
    @passwd = password
    mail(
      to: User.last.email, subject: 'Nouveau groupe sur le réseau jeunesse',
      template_name: (new_user ? 'owner_created_new' : 'owner_created_exist')
    )
  end

  # a new card has been created, let's validate!
  def admin_created(emails, card)
    @gname = card.name
    @type = card.card_type.name
    @url = edit_admin_card_status_url(card, locale: I18n.locale)
    mail to: emails, subject: 'Validation d\'une carte'
  end

  # hey guys, you are now part of a new group!
  def team_welcome(card)
    @firstname = card.user.firstname
    @lastname = card.user.lastname
    @gname = card.name
    @type = card.card_type.name
    mail to: card.responsables.pluck(:email), subject: "Bienvenue dans l'aventure !"
  end

  #
  # User joining card process
  #

  # someone wants to join your card
  # params:   - card, the card concerned
  #           - the user that made the request
  def card_affiliation_request(user, card)
    @name = card.user.firstname
    @firstname = user.firstname
    @lastname = user.lastname
    @gname = card.name
    @type = card.card_type.name
    mail to: card.user.email, subject: "Quelqu'un veut s'affilier"
  end

  # user you invited accepted to join
  # params:   - card, the card concerned
  #           - the user that made the request
  def confirmed_user(user, card)
    @uname = card.user.firstname
    @firstname = user.firstname
    @lastname = user.lastname
    @gname = card.name
    @type = card.card_type.name
    mail to: card.user.email, subject: 'Affiliation acceptée'
  end

  # user you invited didn't aceppt to join
  # params:   - card, the card concerned
  #           - the user that made the request
  def unconfirmed_user(user, card)
    @uname = card.user.firstname
    @firstname = user.firstname
    @lastname = user.lastname
    @gname = card.name
    @type = card.card_type.name
    mail to: card.user.email, subject: 'Affiliation refusée'
  end

  # your card has changed its status
  def changed_status(card, status, old_status, infos)
      @name = card.user.firstname
      @gname = card.name
      @type = card.card_type.name
      @old_status = old_status.name
      @status = status.name
      @infos = infos
      mail(
        to: card.user.email,
        subject: "Mise à jour de votre #{card.card_type.name}",
        template_name: "status_#{status.name.parameterize.underscore}"
      )
  end
end
