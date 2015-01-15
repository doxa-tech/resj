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

  # hey guys, you are now part of a new group!
  def team_welcome(card)
      mail  to:      card.responsable.pluck(:email),
            subject: "Bienvenue dans l'aventure !",
            body:
      params({ UFIRSTNAME: card.user.firstname,
               ULASTNAME: card.user.lastname, 
               GNAME: card.name, 
               GTYPE: card.card_type.name })
      template "card-team-welcome"
  end

  #
  # User joining card process
  #

  # someone wants to join your card
  # params:   - card, the card concerned
  #           - the user that made the request
  def request(user, card)
      mail  to:      card.user.email,
            subject: "Quelqu'un veut s'affilier",
            body:
      params({ UFIRSTNAME: card.user.firstname,
               FIRSTNAME: user.firstname,
               LASTNAME: user.lastname,
               GNAME: card.name, 
               GTYPE: card.card_type.name })
      template "card-join-request"
  end

  # user you invited accepted to join
  # params:   - card, the card concerned
  #           - the user that made the request
  def confirmed_user(user, card)
        mail  to:      card.user.email,
              subject: "Affiliation acceptée",
              body:
        params({ UFIRSTNAME: card.user.firstname,
               FIRSTNAME: user.firstname,
               LASTNAME: user.lastname,
               GNAME: card.name, 
               GTYPE: card.card_type.name })
        template "card-request-accepted"
  end

  # user you invited didn't aceppt to join
  # params:   - card, the card concerned
  #           - the user that made the request
  def unconfirmed_user(user, card)
          mail  to:      card.user.email,
                subject: "Affiliation refusée",
                body:
        params({ UFIRSTNAME: card.user.firstname,
               FIRSTNAME: user.firstname,
               LASTNAME: user.lastname,
               GNAME: card.name, 
               GTYPE: card.card_type.name })
        template "card-request-rejected"
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
