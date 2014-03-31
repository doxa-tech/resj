class UsersController < BaseController
	before_action :connected?, only: [:profile, :edit, :update, :card_request, :card_confirmation, :my_cards]
	after_action only: [:create, :update, :confirmation] { |c| c. track_activity @user }

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		@user.user_type = UserType.find_by_name('user')
		if @user.save
			# sends validation link
			UserMailer.confirmation(@user).deliver
			redirect_to root_path, success: t('user.create.success')
		else
			render 'new'
		end
	end

	def my_cards
		@user = current_user
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
			sign_in(@user)
			redirect_to profile_path, success: "Account confirmed."
		else
			redirect_to root_path, error: "Invalid token."
		end
	end

	def resend_mail
		@user = User.find(params[:id])
		# re-sends confirmation email
		UserMailer.confirmation(@user).deliver
		redirect_to root_path, success: "We sent you a new email."
	end

	def card_request
		card_user = CardUser.where(user_id: current_user.id, card_id: params[:card_id]).first
		card = Card.find(params[:card_id])
		if card_user && card_user.card_validated == false && card_user.updated_at < 1.weeks.ago
			card_user.update_attribute(:card_validated, nil)
			send_request_mail(current_user, card)
			redirect_to profile_path, success: t('user.card.request.success')
		elsif card_user.user_validated == false
			card_user.update_attribute(:user_validated, true)
			send_request_mail(current_user, card)
			redirect_to profile_path, success: t('user.card.request.success')
		elsif card
			new_card_user = CardUser.create(user_id: current_user.id, card_id: card.id, user_validated: true)
			track_activity new_card_user
			send_request_mail(current_user, card)
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
			if params[:validated] == "true"
				track_activity card_user
				CardMailer.confirmed_user(current_user, card_user.card).deliver
			else
				CardMailer.unconfirmed_user(current_user, card_user.card).deliver
			end
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

	# notify card owner that a user wants to join
	def send_request_mail(user, card)
		CardMailer.request(user, card)
	end
end
