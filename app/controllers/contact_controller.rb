class ContactController < ApplicationController

  def orator
    user = User.find_by_uuid(params[:uuid])
    orator = user.try(:orator)
    unless orator.nil?
      contact = Contact.new(contact_params)
      contact.destination = user.email
      if contact.valid?
        ContactMailer.orator(contact).deliver_now
        ContactMailer.confirmation(contact).deliver_now
        redirect_to orator_path(orator), success: "Ton message a été envoyé. Tu as reçu une confirmation à l'email indiqué."
        return
      end
    end
    redirect_to orator_path(orator), error: "Des champs sont invalides"
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :message, :verification)
  end


end
