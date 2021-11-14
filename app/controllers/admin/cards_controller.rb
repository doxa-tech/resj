class Admin::CardsController < Admin::BaseController
  load_and_authorize except: :status

  def index
    @table = CardTable.new(self, @cards.where.not(status: :incomplete), search: true)
  end

  def edit
  end

  def update
    if @card.update(card_params)
      redirect_to admin_cards_path, success: "Enregistré"
    else
      render "edit"
    end
  end

  def destroy
    @card.destroy
    redirect_to admin_cards_path, success: "Supprimé"
  end

  # toggle the status of a card
  def status
    @card = load_and_authorize!(action: "update")
    if @card.pending?
      @card.update_attribute(:status, :online)
      CardMailer.online(@card, params[:message]).deliver_now
      redirect_to edit_admin_card_path(@card), success: "Le groupe a été mis en ligne"
    else
      @card.update_attribute(:status, :pending)
      CardMailer.online(@card, params[:message]).deliver_now
      redirect_to edit_admin_card_path(@card), success: "Le groupe a été mis hors-ligne"
    end
  end

  def card_params
    params.require(:card).permit(:name, :description, :card_type, :street, :place, :location_id,
      :latitude, :longitude, :email, :website, :affiliation, :tag_names, :current_step, parent_ids: [])
  end

end
