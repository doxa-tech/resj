class UserMailer < BaseMailer

  def confirmation(user)
    mandrill_mail to: user.email, 
      subject: 'Confirmation de votre email',
      template: 'user-confirmation',
      params: {
        NAME: user.firstname,
        URL: user_confirmation_url(token: user.remember_token)
      }
  end

  def password_reset(user)
    mandrill_mail to: user.email,
      subject: 'Réinitialisation de votre mot de passe sur Réseau Jeunesse',
      template: 'user-password-reset',
      params: {  
        LINK: edit_password_reset_url(id: user.reset_token),
        NAME: user.firstname 
      }
  end

  # someone wants to affiliate you with a card
  def request(card, user)
    mandrill_mail to: user.email,
      subject: "Demande d'affiliation sur Réseau Jeunesse",
      template: 'user-affiliation-request',
      params: {  
        NAME: user.firstname,
        GNAME: card.name,
        TYPE: card.card_type.name 
      }
  end

  # your request to join a card was accepted
  def confirmed_card(card, user)
    mandrill_mail to: user.email,
      subject: "Demande d'affiliation acceptée",
      template: 'user-affiliation-accepted',
      params: {  
        NAME: user.firstname,
        GNAME: card.name,
        TYPE: card.card_type.name 
      }
  end

  # your request to join a card wasn't accepted
  def unconfirmed_card(card, user)
    mandrill_mail to: user.email,
      subject: "Demande d'affiliation refusée",
      template: 'user-affiliation-refused',
      params: {  
        NAME: user.firstname,
        GNAME: card.name,
        TYPE: card.card_type.name 
      }
  end

  def invite(emails, full_name, link)
    mandrill_mail to: emails,
      from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
      subject: "#{full_name} vous invite à rejoindre le réseau jeunesse",
      template: 'orator-invitation',
      params: {  
        FULLNAME: full_name,
        LINK: link 
      }
  end
end
