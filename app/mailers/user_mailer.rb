class UserMailer < BaseMailer

  def confirmation(user)
    @name = user.firstname
    @url = user_confirmation_url(token: user.remember_token)
    mail(to: user.email, subject: "Confirmation de votre email")
  end

  def password_reset(user)
    @name = user.firstname
    @url = edit_password_reset_url(id: user.reset_token)
    mail to: user.email, subject: 'Réinitialisation de votre mot de passe sur Réseau Jeunesse'
  end

  # someone wants to affiliate you with a card
  def card_affiliation_request(card, user)
    @name = user.firstname
    @gname = card.name
    @type = card.card_type.name
    mail to: user.email, subject: "Demande d'affiliation sur Réseau Jeunesse"
  end

  # your request to join a card was accepted
  def confirmed_card(card, user)
    @name = user.firstname
    @gname = card.name
    @type = card.card_type.name
    mail to: user.email, subject: "Demande d'affiliation acceptée"
  end

  # your request to join a card wasn't accepted
  def unconfirmed_card(card, user)
    @name = user.firstname
    @gname = card.name
    @type = card.card_type.name
    mail to: user.email, subject: "Demande d'affiliation refusée"
  end

  def invite(emails, full_name, link)
    @full_name = full_name
    @link = link
    mail(
      to: emails, from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
      subject: "#{full_name} vous invite à rejoindre le réseau jeunesse",
      template: 'orator-invitation')
  end
end
