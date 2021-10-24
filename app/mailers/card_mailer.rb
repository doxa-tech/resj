class CardMailer < ApplicationMailer

  def submit(card)
    @card = card
    mail(to: card.user.email, subject: "Tu as inscrit un groupe sur Réseau Jeunesse")
  end

end
