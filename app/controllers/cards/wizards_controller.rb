class Cards::WizardsController < ApplicationController
  before_action :check_if_signed_in, only: [:new] # TODO: only the owner must edit the card

  layout 'session'

  def new
    @card = current_user.cards.find_by(status: nil)
    if @card.nil?
      @card = current_user.cards.new
      @card.save!(validate: false) # TODO: validate: false may not be necessary later
    end
    redirect_to edit_cards_wizard_path(@card)
  end

  def edit
    @card = Card.find(params[:id])
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
    render json: @card.errors.full_messages
  end
  
  def confirmation
    @card = Card.find(params[:id])
  end

  def confirm
    @card = Card.find(params[:id])
    if @card.valid?
      @card.update_attribute(:status, :pending)
      redirect_to root_path, success: "Vous êtes entré dans le réseau avec succès ! Votre groupe n'apparaît pas directement sur la carte car elle doit d'abord être validée."
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
