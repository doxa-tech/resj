class UsersController < ApplicationController

	def new
		@user = User.new
	end

	def create
		@user = User.new(params[:user])
		if @user.save
			sign_in(@user)
			redirect_to profil_path, success: t('user.create.success')
		else
			render 'new'
		end
	end

	def edit
		@user = current_user
	end

	def update
		@user = current_user
		if @user.save
			sign_in(@user)
			redirect_to profil_path, success: t('user.edit.success')
		else
			render 'edit'
		end
	end

	# Main page of the user's profile
	def profile
		render layout: 'admin'
	end
end
