class SessionsController < ApplicationController

  before_action :require_loggout, only: [:new, :create]
  before_action :require_confirmed, only: [:create]

  layout "admin"

  def new
  end

  def create
    # def user in SessionsHelper
    if user && user.authenticate(params[:session][:password])
      sign_in user, permanent: params[:session][:remember_me] == "1"
      redirect_to profile_path, success: "Connexion réussie"
    else
      flash.now[:error] = "Nom d'utilisateur et/ou mot de passe incorrect(s)"
      render 'new'
    end
  end

  def destroy
    sign_out
		redirect_to root_path, success: "Tu es déconnecté"
  end

end
