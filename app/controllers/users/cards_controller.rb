class Users::CardsController < ApplicationController
  require_login
  layout "admin"

  def show
    @card = card
  end

  def edit
    @card = card
  end

  def update
    @card = card
    if @card.update(card_params)
      redirect_to users_card_path(@card)
    else
      render 'edit'
    end
  end

  private

  def card
    @card ||= current_user.cards.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:name, :description, :card_type, :street, :place, :location_id,
      :latitude, :longitude, :email, :website, :affiliation, parent_ids: [])
  end

end
