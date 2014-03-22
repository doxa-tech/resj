class UsersController < BaseController
	before_action :connected?, only: [:profile, :edit, :update, :card_request, :card_confirmation]

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		@user.user_type = UserType.find_by_name('user')
		if @user.save
			# UserMailer.confirmation...
			redirect_to root_path, success: t('user.create.success')
		else
			render 'new'
		end
	end

	def edit
		@user = current_user
		render layout: "admin"
	end

	def update
		@user = current_user
		if @user.update_attributes(user_params)
			sign_in(@user)
			redirect_to user_edit_path, success: t('user.edit.success')
		else
			render 'edit'
		end
	end

	def confirmation
		if @user = User.find_by_remember_token(params[:token])
			@user.update_attribute(:confirmed, true)
			sign(@user)
			redirect_to profile_path, success: "Account confirmed."
		end
	end

	def resend_mail
		@user = User.find(params[:id])
		# UserMailer
		redirect_to root_path, success: "We sent you a new email."
	end

	def card_request
		card_user = CardUser.where(user_id: current_user.id, card_id: params[:card_id]).first
		card = Card.find(params[:card_id])
		if card_user && card_user.card_validated == false && card_user.updated_at < 1.months.ago
			card_user.update_attribute(:card_validated, nil)
			redirect_to profile_path, success: t('user.card.request.success')
		elsif card_user.user_validated == false
			card_user.update_attribute(:user_validated, true)
			redirect_to profile_path, success: t('user.card.request.success')
		elsif card_user && card
			CardUser.create(user_id: current_user.id, card_id: card.id, user_validated: true)
			redirect_to profile_path, success: t('user.card.request.success')
		else
			redirect_to profile_path, error: t('user.card.request.error')
		end
	end

	def card_confirmation
		card_user = CardUser.find(params[:card_user_id])
		if card_user && card_user.user_id == current_user.id && params[:validated].in?(["false", "true"])
			card_user.update_attribute(:user_validated, params[:validated])
			replace_responsable(current_user, card_user.card)
			redirect_to profile_path, success: t('user.card.confirmation.success')
		else
			redirect_to profile_path, error: t('user.card.confirmation.error')
		end
	end

	# Main page of the user's profile
	def profile
		render layout: 'admin'
	end

	private

	def user_params
		params.require(:user).permit(:firstname, :lastname, :email, :gravatar_email, :password, :password_confirmation, :current_password)
	end
end
