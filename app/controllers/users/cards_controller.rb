class Users::CardsController < ApplicationController
  require_login
  layout "admin"

  def edit
    @card = card
  end

  def update
    @card = card
    if @card.update(card_params)
      redirect_to edit_users_card_path(@card), success: "Ton groupe a été mis à jour"
    else
      render 'edit'
    end
  end

  # transfer a card to a new user
  def transfer
    user = User.find_by_email(params[:email])
    unless user.nil?
      card.update_attribute(:user, user)
      redirect_to profile_path, error: "Ton groupe a été transféré à l'utilisateur demandé"
    else
      redirect_to profile_path, error: "Aucun utilisateur avec cette email n'a été trouvé"
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
