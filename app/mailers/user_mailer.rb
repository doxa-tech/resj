class UserMailer < BaseMailer

  def confirmation(user)
    mail to:      user.email,
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Confirmation de votre email',
         body:
    headers['X-MC-MergeVars'] = {
                                  NAME: user.firstname,
                                  URL: user_confirmation_url(token: user.remember_token)
                                }.to_json # variables
    headers['X-MC-Template'] = "user-confirmation"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  def password_reset(user)
    mail to:      user.email,
         subject: 'Réinitialisation de votre mot de passe sur Réseau Jeunesse',
         body:
    params({  LINK: edit_password_reset_url(id: user.reset_token),
              NAME: user.firstname, })
    template 'user-password-reset'  # template
  end

  # someone wants to affiliate you with a card
  def request(card, user)
    mail to:      user.email,
         subject: "Demande d'affiliation sur Réseau Jeunesse",
         body:
    params({  NAME: user.firstname,
              GNAME: card.name, 
              TYPE: card.card_type.name })
    template 'user-affiliation-request'  # template
  end

  # your request to join a card was accepted
  def confirmed_card(card, user)
    mail to:      user.email,
         subject: "Demande d'affiliation acceptée",
         body:
    params({  NAME: user.firstname,
              GNAME: card.name, 
              TYPE: card.card_type.name })
    template 'user-affiliation-accepted'  # template
  end

  # your request to join a card wasn't accepted
  def unconfirmed_card(card, user)
    mail to:      user.email,
         subject: "Demande d'affiliation refusée",
         body:
    params({  NAME: user.firstname,
              GNAME: card.name, 
              TYPE: card.card_type.name })
    template 'user-affiliation-refused'  # template
  end
end
