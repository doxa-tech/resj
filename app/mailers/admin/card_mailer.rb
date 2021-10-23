class Admin::CardMailer < ApplicationMailer

  def submit(card)
    @card = card
    mail(to: "nkcr.je@gmail.com", subject: "Un nouveau groupe a été créé")
  end

end
