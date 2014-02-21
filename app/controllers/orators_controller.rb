class OratorsController < ApplicationController

	def index
	 @orators = Orator.all 
	end

	def new
		@user = User.new
		@user.build_orator
	end

	def create
		@user = User.new(orator_params)
		if @user.save
			sign_in @user
			redirect_to profile_path, success: t('orator.create.success')
		else
			render 'new'
		end
	end

	private

	def orator_params
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password, orator_attributes: [:street, :location_id, :phone, :disponibility, { :theme_ids =>[]} , { :disponibility_ids => [] } ])
	end
end
