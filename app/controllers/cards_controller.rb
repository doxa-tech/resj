class CardsController < ApplicationController

  def index
    respond_to do |format|
			format.json { @cards = search }
		end
  end

  def show
    @card = Card.find(params[:id])
  end

  private

  def search
    clean(params)
    cards = Card.all
    if params[:name].present?
      cards = cards.where("name ilike ?", "%#{params[:name]}%")
    end
    if params[:card_types].present?
      cards = cards.where(card_type: params[:card_types])
    end
    if params[:cantons].present?
      cards = cards.joins(:location).where(locations: { canton_id: params[:cantons] })
    end
    if params[:tags].present?
      cards = cards.joins(:taggings).where(taggings: { tag_id: params[:tags] })
    end
    return cards
  end

  def clean(params)
    # reject empty strings and convert values to an integer ("string".to_i returns 0)
    [params[:card_types], params[:cantons], params[:tags]].compact.each do |p| 
      p.reject! { |c| c.empty? }
      p.map! { |c| c.to_i }
    end
  end

end
