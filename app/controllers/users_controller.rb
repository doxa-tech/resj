class UsersController < BaseController
	before_action :connected?, only: [:profile, :edit, :update, :card_request, :card_confirmation]

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		@user.user_type = UserType.find_by_name('user')
		if @user.save
			sign_in(@user)
			redirect_to profile_path, success: t('user.create.success')
		else
			render 'new'
		end
	end

	def edit
		@user = current_user
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

	def card_request
		if CardUser.where(user_id: current_user.id, card_id: params[:card_id]).any?
			redirect_to profile_path, error: t('user.card.request.error')
		else
			CardUser.create(user_id: current_user.id, card_id: params[:card_id], user_validated: true)
			redirect_to profile_path, success: t('user.card.request.success')
		end
	end

	def card_confirmation
		if @card_user = CardUser.find(params[:card_user_id]) && @card_user.user_id == current_user.id
			@card_user.update_attribute(:user_validated, true)
			responsable = Responsable.where(firstname: current_user.firstname, lastname: current_user.lastname, emai: current_user.email)
			CardResponsable.find_by_card_id_and_responsable_id(@card_user.card_id, responsable.id).try(:destroy)
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
