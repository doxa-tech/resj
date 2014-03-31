class PasswordResetsController < BaseController

	def new
	end

	def create
		@user = User.find_by_email(params[:email])
  	if @user
  		@user.send_password_reset
  		redirect_to root_url, notice: "Reset instruction sent"
  		track_activity @user
  	else
  		redirect_to new_password_reset_path, error: "Email doesn't exist"
  	end
	end

	def edit
		@user = User.find_by_reset_token(params[:id])
	end

	def update
		@user = User.find_by_reset_token!(params[:id])
		if @user.reset_sent_at < 2.hours.ago
	    redirect_to new_password_reset_path, :error => "Password reset has expired."
	  elsif @user.update_attributes(user_params)
	  	track_activity @user
	    redirect_to connexion_path, :success => "Password has been reset!"
	  else
	    render 'edit'
	  end
	end

	private

	def user_params
		params.require(:user).permit(:password, :password_confirmation)
	end

end
