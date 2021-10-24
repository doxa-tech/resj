class Api::LocationsController < ApplicationController

  def index
    locations = Location.includes(:canton).where("post_name ilike :query OR official_name ilike :query", query: "%#{params[:query]}%").map do |location|
			{
				"name" => "#{location.official_name} - #{location.post_name} - #{location.zip} - #{location.canton.name}",
				"id" => location.id
			}
		end
		render json: locations
  end

end
