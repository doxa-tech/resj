class Api::TagsController < ApplicationController

  def index
    render json: Tag.where("name ilike ?", "%#{params[:query]}%" ).order("popularity DESC")
  end

end
