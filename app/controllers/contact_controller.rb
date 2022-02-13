class ContactController < ApplicationController

  def orator
    @orator = Orator.active.find(params[:id])
    @contact = Contact.new(contact_params)
    @contact.destination = @orator.user.email
    if @contact.valid?
      ContactMailer.orator(@contact).deliver_now
      ContactMailer.confirmation(@contact).deliver_now
      redirect_to orator_path(@orator), success: "Ton message a été envoyé. Tu as reçu une confirmation à l'email indiqué."
    else
      render "orators/show"
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :message, :verification)
  end

end
