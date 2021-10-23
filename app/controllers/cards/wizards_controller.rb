class Cards::WizardsController < ApplicationController
  before_action :check_if_signed_in

  layout 'admin'

  def new
    @card = current_user.cards.find_by(status: nil)
    if @card.nil?
      @card = current_user.cards.new
      @card.status = :incomplete
      @card.save!(validate: false) # TODO: validate: false may not be necessary later
    end
    redirect_to edit_cards_wizard_path(@card)
  end

  def edit
    @card = current_user.cards.find(params[:id])
  end

  def update
    @card = current_user.cards.find(params[:id])
    @card.update(card_params)
    render json: @card.errors.full_messages
  end
  
  def confirmation
    @card = current_user.cards.find(params[:id])
  end

  def confirm
    @card = current_user.cards.find(params[:id])
    if @card.valid?
      @card.update_attribute(:status, :pending)
      CardMailer.submit(@card).deliver_now
      redirect_to root_path, success: "Vous êtes entré dans le réseau avec succès ! Votre groupe n'apparaît pas directement sur la carte car il doit d'abord être validé."
    else
      render 'confirmation'
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :description, :card_type, :street, :place, :location_id,
      :latitude, :longitude, :email, :website, :affiliation, :tag_names, :current_step, parent_ids: [])
  end

  def check_if_signed_in
    if current_user.nil?
      redirect_to new_cards_user_path
    end
  end

end
