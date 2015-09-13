class OratorsController < BaseController
	before_action :authorize_create, only: [:new, :create]
	before_action :authorize_resource, only: [:index, :show]
	before_action :disabled?, only: [:show]
	before_action :orator?, only: [:new, :create]
	after_action only: [:create, :update] { |c| c. track_activity @user }

	def index
		js true
		respond_to do |format|
			format.html
			format.json do
				@orators = Orator.search(params).includes(:user, :themes, location: :canton)
				@grouped = @orators.group_by{ |a| a.location}
			end
		end
	end

	def show
		js true, lat: @orator.location.latitude, lng: @orator.location.longitude
	end

	def new
		@user = current_user || User.new
		@user.build_orator
	end

	def create
		@user = User.new(orator_params)
		@user.user_type = UserType.find_by_name('user')
		@user.confirmed = true
		if @user.save
			sign_in(@user)
			OratorMailer.orator_created(@user).deliver_now
			Parent.create(user: @user, parent: User.find_by_firstname('g_orator'))
			redirect_to root_path, success: render_message('orator_created')
		else
			render 'new'
		end
	end

	def update
		@user = current_user
		if @user.update_with_password(orator_params)
			sign_in(@user)
			redirect_to user_edit_path, success: t('orator.edit.success')
		else
			render 'users/edit', layout: 'admin'
		end
	end

	private

	def orator_params
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation, :current_password, orator_attributes: [:id, :street, :location_id, :phone, :disponibility, :description, :disabled, { :theme_ids =>[] } , { :disponibility_ids => [] } ])
	end

	def disabled?
		@orator = Orator.find(params[:id])
		redirect_to orators_path, error: "Cette orateur n'est plus disponible pour le moment." if @orator.disabled
	end

	def orator?
		redirect_to root_path, error: "Vous êtes déjà un orateur." if current_user && !current_user.orator.nil?
	end
end
