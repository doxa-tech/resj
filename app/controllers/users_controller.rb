class UsersController < ApplicationController
	before_action :connected?, only: [:profile, :edit, :update]

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
			redirect_to edit_users_path, success: t('user.edit.success')
		else
			render 'edit'
		end
	end

	# Main page of the user's profile
	def profile
		render layout: 'admin'
	end

	private

	def user_params
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password)
	end

	def connected?
		redirect_to connexion_path, error: "Please sign in" if current_user.nil?
	end
end
