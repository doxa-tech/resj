class Admin::UsersController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	before_action :authorize_invitation, only: [:invite, :invitation]
	after_action -> { track_activity(@user) }, only: [:create, :update, :destroy]

	def index
		@table = UserTable.new(self, nil, search: true)
		@table.respond
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		@user.confirmed = true
		if @user.save
			redirect_to admin_users_path, success: t('user.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @user.update_attributes(user_params)
			redirect_to admin_users_path, success: t('user.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@user.destroy
		redirect_to admin_users_path, success: t('user.admin.destroy.success')
	end

	def invitation
		js 'invitation'
		@users = User.users.includes(:orator).where( orators: { user_id: nil })
	end

	def invite
		emails = params[:emails].split(",").collect(&:strip).push(*params[:users])
		if emails.any?
			token = generate_orator_token
			UserMailer.invite(emails, current_user.full_name, new_orator_path(token: token.token)).deliver_now
		end
		redirect_to invitation_admin_users_path, success: "Invitations envoyées"
	end

	private

	def user_params
		params.require(:user).permit(:firstname, :lastname, :email, :gravatar_email, :avatar, :password, :password_confirmation, :user_type_id, orator_attributes: [:id, :street, :location_id, :phone, :disponibility, :description, :disabled, { :theme_ids =>[] } , { :disponibility_ids => [] } ])
	end

	def current_resource
		@user = User.find_by_id(params[:id])
	end

	def generate_orator_token
		g_token = User.find_by_firstname("g_token")
		ownership = Ownership.find_or_add_by(element: "orators", type: "all_entries", user: g_token, right_create: true)
		AccessToken.create!(ownership: ownership, exp_at: 1.months.since(Time.now), is_valid: true)
	end

	def authorize_invitation
		PermissionAccess.new(self, params[:controller], "invite", nil).authorize(:action)
	end

end
