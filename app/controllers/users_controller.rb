class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
		if @user.save
      UserMailer.confirmation(@user).deliver_now
			redirect_to root_path, success: "Ton compte Reseau Jeunesse a été créé !"
		else
			render 'new'
		end
  end

  def edit
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation)
  end

end
