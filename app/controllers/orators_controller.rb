class OratorsController < BaseController
	before_action :authorize_token, only: [:new, :create]
	after_action only: [:create, :update] { |c| c. track_activity @user }

	def index
		@search = Orator.search do 
			fulltext params[:query]
			paginate page: params[:page] if params[:page]
			with(:themes_ids, params[:themes_ids]) if params[:themes_ids]
			with(:canton_ids, params[:canton_ids]) if params[:canton_ids]
		end
  	@orators = @search.results
	end

	def show
		@orator = Orator.find(params[:id])
	end

	def new
		@user = User.new
		@user.build_orator
	end

	def create
		@user = User.new(orator_params)
		@user.user_type = UserType.find_by_name('user')
		@user.confirmed = true
		if @user.save
			OratorMailer.orator_created(@user).deliver
			redirect_to root_path, success: t('orator.create.success')
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
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password, orator_attributes: [:id, :street, :location_id, :phone, :disponibility, :description, :disabled, { :theme_ids =>[] } , { :disponibility_ids => [] } ])
	end

	def authorize_token
		session[:token] = params[:token] if params[:token]
		if !current_permission.allow_token?(params[:controller], params[:action], session[:token])
			redirect_to root_path, error: "Invalid token !"
		end
	end
end
