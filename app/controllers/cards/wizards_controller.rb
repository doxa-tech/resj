class Cards::WizardsController < ApplicationController

  def new
    redirect_to edit_cards_wizard_path(0)
  end

  def edit
    # @card = Card.find(params[:id])
  end

  def update
    # @card = Card.find(params[:id])
  end
  
  def confirmation
    # @card = Card.find(params[:id])
  end

  def confirm
    # @card = Card.find(params[:id])
    redirect_to root_path, success: "Vous êtes entré dans le réseau avec succès !"
  end

end
