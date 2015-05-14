class UserMailer < BaseMailer

  def confirmation(user)
    mail to:      user.email,
         subject: 'Confirmation de votre email',
         body:
    params({  NAME: user.firstname,
              URL: user_confirmation_url(token: user.remember_token) })
    template 'user-confirmation'
  end

  def password_reset(user)
    mail to:      user.email,
         subject: 'Réinitialisation de votre mot de passe sur Réseau Jeunesse',
         body:
    params({  LINK: edit_password_reset_url(id: user.reset_token),
              NAME: user.firstname })
    template 'user-password-reset'
  end

  # someone wants to affiliate you with a card
  def request(card, user)
    mail to:      user.email,
         subject: "Demande d'affiliation sur Réseau Jeunesse",
         body:
    params({  NAME: user.firstname,
              GNAME: card.name,
              TYPE: card.card_type.name })
    template 'user-affiliation-request'
  end

  # your request to join a card was accepted
  def confirmed_card(card, user)
    mail to:      user.email,
         subject: "Demande d'affiliation acceptée",
         body:
    params({  NAME: user.firstname,
              GNAME: card.name,
              TYPE: card.card_type.name })
    template 'user-affiliation-accepted'
  end

  # your request to join a card wasn't accepted
  def unconfirmed_card(card, user)
    mail to:      user.email,
         subject: "Demande d'affiliation refusée",
         body:
    params({  NAME: user.firstname,
              GNAME: card.name,
              TYPE: card.card_type.name })
    template 'user-affiliation-refused'
  end

  def invite(emails, full_name, link)
    mail to:      emails,
         from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
         subject: "#{full_name} vous invite à rejoindre le réseau jeunesse",
         body:
    params({  FULLNAME: full_name,
              LINK: link })
    template 'orator-invitation'
  end
end
