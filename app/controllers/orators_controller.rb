class OratorsController < ApplicationController

  def new
    @orator = Orator.new
  end

  def create
    @orator = Orator.new(orator_params)
    @orator.user = current_user if current_user
    if @orator.save
      redirect_to root_path, success: "Bienvenue dans le réseau des orateurs"
    else
      render 'new'
    end
  end

  private

  def orator_params
    params.require(:orator).permit(:description, :street, :location_id, :phone, :disponibility, theme_ids: [], disponibility_ids: [])
  end

end
