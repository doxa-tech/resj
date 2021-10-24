class ContactMailer < ApplicationMailer

  def orator(contact)
    @contact = contact
    mail(
      to: contact.destination, 
      reply_to: contact.email,
      subject: "Un utilisateur t'a contacté sur Réseau Jeunesse !")
  end

  def confirmation(contact)
    @contact = contact
    mail(to: contact.email, subject: "Copie de ton message sur Réseau Jeunesse")
  end

end
