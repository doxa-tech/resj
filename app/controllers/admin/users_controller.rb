class Admin::UsersController < Admin::BaseController

	def index
		@table = UserTable.new(view_context)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		@user.user_type_id = params[:user_type][:user_type_id]
		if @user.save
			redirect_to admin_users_path, success: t('user.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update 
		@user.user_type_id = params[:user_type][:user_type_id]
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

	private

	def user_params
		params.require(:user).permit(:firstname, :lastname, :email, :password, :password_confirmation)
	end

	def current_resource
		@user = User.find(params[:id])
	end
end
