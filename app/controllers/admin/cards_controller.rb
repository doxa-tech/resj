class Admin::CardsController < Admin::BaseController
  load_and_authorize

  def index
    @table = CardTable.new(self, @cards.where.not(status: "incomplete"), search: true)
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

  def card_params
    params.require(:card).permit(:name, :description, :card_type, :street, :place, :location_id,
      :latitude, :longitude, :email, :website, :affiliation, :tag_names, :current_step, parent_ids: [])
  end

end
