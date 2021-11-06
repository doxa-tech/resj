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

end
