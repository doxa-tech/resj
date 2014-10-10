class PasswordResetsController < BaseController

	def new
	end

	def create
		@user = User.users.find_by_email(params[:email])
  	if @user
  		@user.send_password_reset
  		track_activity @user
  	end
		redirect_to root_url, notice: "Un email contenant les instructions pour changer votre mot de passe vous a été envoyé."
	end

	def edit
		@user = User.users.find_by_reset_token(params[:id])
	end

	def update
		@user = User.users.find_by_reset_token!(params[:id])
		if @user.reset_sent_at < 2.hours.ago
	    redirect_to new_password_reset_path, :error => "La demande pour un nouveau mot de passe a expiré."
	  elsif @user.update_attributes(user_params)
	  	track_activity @user
	    redirect_to connexion_path, :success => "Votre mot de passe a été changé avec succès. Vous pouvez dès à présent l'utiliser pour vous connecter!"
	  else
	    render 'edit'
	  end
	end

	private

	def user_params
		params.require(:user).permit(:password, :password_confirmation)
	end

end
