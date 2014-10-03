class UsersController < BaseController
	before_action :connected?, only: [:profile, :edit, :update, :avatar, :avatar_update, :my_cards]
	after_action only: [:create, :update, :confirmation] { |c| c. track_activity @user }
	layout 'admin'

	def new
		@user = User.new
		render layout: 'application'
	end

	def create
		@user = User.new(user_params)
		@user.user_type = UserType.find_by_name('user')
		if @user.save
			# sends validation link
			UserMailer.confirmation(@user).deliver
			redirect_to root_path, success: t('user.create.success')
		else
			render 'new', layout: 'application'
		end
	end

	def edit
		@user = current_user
	end

	def avatar
		@user = current_user
	end

	def update
		@user = current_user
		if @user.update_with_password(user_params)
			sign_in(@user)
			redirect_to user_edit_path, success: t('user.edit.success')
		else
			render 'edit'
		end
	end

	def avatar_update
		@user = current_user
		if @user.update_with_password(avatar_params)
			sign_in(@user)
			redirect_to user_avatar_path, success: t('user.edit.success')
		else
			render 'avatar'
		end
	end

	def confirmation
		if @user = User.find_by_remember_token(params[:token])
			@user.update_attribute(:confirmed, true)
			sign_in(@user)
			redirect_to profile_path, success: "Compte confirmé. Vous êtes maintenant connecté !"
		else
			redirect_to root_path, error: "Lien invalide"
		end
	end

	def resend_mail
		@user = User.find(params[:id])
		# re-sends confirmation email
		UserMailer.confirmation(@user).deliver
		redirect_to root_path, success: "Un nouveau email a été envoyé à votre adresse."
	end

	# Main page of the user's profile
	def profile
	end

	private

	def user_params
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password)
	end

	def avatar_params
		params.require(:user).permit(:gravatar_email, :gravatar, :avatar, :current_password)
	end
end
