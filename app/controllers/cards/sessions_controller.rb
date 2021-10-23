class Cards::SessionsController < ApplicationController
  before_action :require_loggout
  before_action :require_confirmed

  layout "admin"

  def create
    # def user in SessionsHelper
    if user && user.authenticate(params[:session][:password])
      sign_in user, permanent: params[:session][:remember_me] == "1"
      redirect_to new_cards_wizard_path
    else
      flash.now[:error] = "Nom d'utilisateur et/ou mot de passe incorrect(s)"
      @user = User.new
      render "cards/users/new"
    end
  end

end
