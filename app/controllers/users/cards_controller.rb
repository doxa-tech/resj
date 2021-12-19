class Users::CardsController < ApplicationController
  require_login
  layout "admin"

  def edit
    @confirmed = params[:confirmed] == "true"
    @card = card
  end

  def update
    @card = card
    @card.assign_attributes(card_params)
    was_outdated = !@card.correct?
    if @card.valid?
      @card.last_updated = Time.current
      @card.validity = :correct
      @card.save
      redirect_to edit_users_card_path(@card, confirmed: was_outdated), success: "Ton groupe a été mis à jour"
    else
      render 'edit'
    end
  end

  # transfer a card to a new user
  def transfer
    user = User.find_by_email(params[:email])
    unless user.nil? || user == card.user
      old_user = card.user
      card.update_attribute(:user, user)
      CardMailer.received(card, user).deliver_now
      CardMailer.transfered(card, old_user).deliver_now
      redirect_to profile_path, success: "Ton groupe a été transféré à l'utilisateur demandé"
    else
      redirect_to edit_users_card_path, error: "Aucun utilisateur avec l'email #{params[:email]} n'a été trouvé. Sois sûr que la personne ait déjà créé un compte sur le site avant de transférer le groupe."
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
