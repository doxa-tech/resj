class OratorsController < ApplicationController

	def index
	 @orators = Orator.all 
	end

	def new
		@user = User.new
		@user.build_orator
	end

	def create
		@orator = User.new(user_params)
		if @orator.save
			redirect_to profile_path, success: t('orator.create.success')
		else
			render 'edit'
		end
	end

	private
end
