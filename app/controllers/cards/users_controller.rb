class Cards::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
		if @user.save
      # UserMailer.confirmation(@user).deliver_now # TODO
      sign_in @user
			redirect_to new_cards_wizard_path
		else
			render 'new'
		end
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation)
  end

end
