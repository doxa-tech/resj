class CardMailer < ApplicationMailer

  def submit(card)
    @card = card
    mail(to: card.user.email, subject: "Tu as inscrit un groupe sur Réseau Jeunesse")
  end

  def transfered(card, user)
    @card = card
    @user = user
    mail(to: user.email, subject: "Ton groupe a été transféré")
  end

  def received(card, user)
    @card = card
    @user = user
    mail(to: user.email, subject: "Tu as reçu la responsablité d'un groupe")
  end

  def online(card, message)
    @card = card
    @message = message
    mail(to: card.user.email, subject: "Ton groupe sur Réseau Jeunesse est désormais en ligne !")
  end

  def offline(card, message)
    @card = card
    @message = message
    mail(to: card.user.email, subject: "Ton groupe sur Réseau Jeunesse n'est désormais plus visible !")
  end

  def migration(user)
    @user = user
    mail(to: user.email, subject: "Du nouveau sur Réseau Jeunesse")
  end

end
