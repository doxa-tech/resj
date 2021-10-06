class UsersController < ApplicationController
  layout "admin"
  
  require_login only: [:edit, :update, :profile]

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
