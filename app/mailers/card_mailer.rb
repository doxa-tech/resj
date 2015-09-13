class CardMailer < BaseMailer
  
  #
  # New card process
  #

  # your card was created successfully
  def owner_created(card, new_user, password)
    mandrill_mail to: card.user.email,
      subject: 'Nouveau groupe sur le réseau jeunesse',
      template: (new_user ? 'card-created-owner-new' : 'card-created-owner-exist'),
      params: { 
        TYPE: card.card_type.name, NAME: card.user.firstname,
        GNAME: card.name,
        PASSWD: password 
      }
  end

  # a new card has been created, let's validate!
  def admin_created(emails, card)
    mandrill_mail to: emails,
      subject: 'Validation d\'une carte',
      template: 'card-created-admin',
      params: { 
        TYPE: card.card_type.name,
        GNAME: card.name,
        LINK: edit_admin_card_url(card, locale: I18n.locale) 
      }
  end

  # hey guys, you are now part of a new group!
  def team_welcome(card)
    mandrill_mail to: card.responsables.pluck(:email),
      subject: "Bienvenue dans l'aventure !",
      template: 'card-team-welcome',
      params: { 
        UFIRSTNAME: card.user.firstname,
        ULASTNAME: card.user.lastname,
        GNAME: card.name,
        GTYPE: card.card_type.name 
      }
  end

  #
  # User joining card process
  #

  # someone wants to join your card
  # params:   - card, the card concerned
  #           - the user that made the request
  def request(user, card)
    mandrill_mail to: card.user.email,
      subject: "Quelqu'un veut s'affilier",
      template: 'card-join-request',
      params: { 
        UFIRSTNAME: card.user.firstname,
        FIRSTNAME: user.firstname,
        LASTNAME: user.lastname,
        GNAME: card.name,
        GTYPE: card.card_type.name 
      }
  end

  # user you invited accepted to join
  # params:   - card, the card concerned
  #           - the user that made the request
  def confirmed_user(user, card)
    mandrill_mail to: card.user.email,
      subject: 'Affiliation acceptée',
      template: 'card-request-accepted',
      params: { 
        UFIRSTNAME: card.user.firstname,
        FIRSTNAME: user.firstname,
        LASTNAME: user.lastname,
        GNAME: card.name,
        GTYPE: card.card_type.name 
      }
  end

  # user you invited didn't aceppt to join
  # params:   - card, the card concerned
  #           - the user that made the request
  def unconfirmed_user(user, card)
    mandrill_mail to: card.user.email,
      subject: 'Affiliation refusée',
      template: 'card-request-rejected',
      params: { 
        UFIRSTNAME: card.user.firstname,
        FIRSTNAME: user.firstname,
        LASTNAME: user.lastname,
        GNAME: card.name,
        GTYPE: card.card_type.name 
      }
  end

  # your card has changed its status
  def changed_status(card, status, old_status, infos)
    mandrill_mail to: card.user.email,
      subject: "Mise à jour de votre #{card.card_type.name}",
      template: "card-#{status.name.parameterize}",
      params: { 
        STATUS: status.name,
        OLD_STATUS: old_status.name,
        INFOS: infos,
        NAME: card.user.firstname,
        TYPE: card.card_type.name 
      }
  end
end
