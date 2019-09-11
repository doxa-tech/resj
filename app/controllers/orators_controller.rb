class OratorsController < ApplicationController

  def new
    @orator = Orator.new
    @orator.user = User.new unless signed_in?
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
    attributes = [:description, :street, :location_id, :phone, :disponibility, theme_ids: [], disponibility_ids: []]
    attributes.push(user_attributes: [:firstname, :lastname, :email, :password, :password_confirmation]) unless signed_in?
    params.require(:orator).permit(attributes)
  end

end
