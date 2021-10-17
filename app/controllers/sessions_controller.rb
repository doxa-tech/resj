class SessionsController < ApplicationController

  before_action :require_loggout, only: [:new, :create]

  layout "admin"

  def new
  end

  def create
    @user = User.where("lower(email) = ?", params[:session][:email].strip.downcase).first
    if @user && @user.authenticate(params[:session][:password])
      sign_in @user, permanent: params[:session][:remember_me] == "1"
      redirect_back_or(redirect_url, success: "Connexion réussie")
    else
      flash.now[:error] = "Nom d'utilisateur et/ou mot de passe incorrect(s)"
      render 'new'
    end
  end

  def destroy
    sign_out
		redirect_to root_path, success: "Tu es déconnecté"
  end

  private

  def redirect_url
    params[:redirect_url] || profile_path
  end

end
