class OratorsController < BaseController
	before_action :authorize_token, only: [:new, :create]

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
	
	def update
		@user = User.find(params[:id])
		if @user.update_attributes(orator_params)
			sign_in @user
			redirect_to user_edit_path, success: t('orator.edit.success')
		else
			render 'edit'
		end
	end

	private

	def orator_params
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password, orator_attributes: [:id, :street, :location_id, :phone, :disponibility, { :theme_ids =>[]} , { :disponibility_ids => [] } ])
	end

	def authorize_token
		session[:token] = params[:token] if params[:token]
		if !current_permission.allow_token?(params[:controller], params[:action], session[:token])
			redirect_to root_path, error: "Invalid token !"
		end
	end
end
