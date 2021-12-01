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

  # count indicates the number of reminder sent. 0 is the first "normal" request.
  # After the 4th reminder the group is marked as "Deactivated".
  def update_check(card, count)
    @card = card
    @count = count
    mail(to: card.user.email, subject: "Vérifie ton groupe sur Réseau Jeunesse")
  end

end
