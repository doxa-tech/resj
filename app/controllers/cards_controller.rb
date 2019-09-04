class CardsController < ApplicationController

  def index
    respond_to do |format|
			format.html
			format.json { @cards = Card.all }
		end
  end

end
