class UsersController < ApplicationController
  layout "admin"
  
  require_login only: [:edit, :update, :profile]
  before_action :require_loggout, only: [:new]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
		if @user.save
      # UserMailer.confirmation(@user).deliver_now TODO
			redirect_to root_path, success: "Ton compte Reseau Jeunesse a été créé !"
		else
			render 'new'
		end
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
		if @user.update_with_password(params[:user][:current_password], user_params)
			sign_in(@user)
			redirect_to profile_path, success: "Tes informations ont été mises à jour"
		else
			render "edit"
		end
  end

  def profile
    @user = current_user
    @orator = @user.orator
    @cards = @user.cards
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation)
  end

end
