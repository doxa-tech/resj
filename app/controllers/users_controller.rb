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
      UserMailer.confirmation(@user).deliver_now
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

  def destroy
    @user = current_user
    @user.destroy
    redirect_to root_path, success: "Ton compte a été supprimé"
  end

  def profile
    @user = current_user
    @orator = @user.orator
    @cards = @user.cards
  end

  def confirmation
		if @user = User.find_by_remember_token(params[:token])
			@user.update_attribute(:confirmed, true)
			sign_in(@user)
			redirect_to profile_path, success: "Ton compte est validé. Tu es maintenant connecté !"
		else
			redirect_to root_path, error: "Le lien est invalide."
		end
	end

  def resend_confirmation
		@user = User.find_by_uuid(params[:id])
		# re-sends confirmation email
		UserMailer.confirmation(@user).deliver_now
		redirect_to root_path, success: "Un nouvel email a été envoyé"
	end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation)
  end

end
