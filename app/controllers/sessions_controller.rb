class SessionsController < BaseController
	before_action :connected?, only: [:new]

	def new
		@user = User.new
	end

	def create
		@user = User.find_by_email(params[:session][:email].strip.downcase)
		if @user && @user.authenticate(params[:session][:password])
			params[:session][:remember_me] == '1' ? sign_in_permanent(@user) : sign_in(@user)
			redirect_back_or profile_path, success: t('session.create.success')
		else
			redirect_to connexion_path, error: t('session.create.error')
		end
	end

	def destroy
		sign_out
		redirect_to root_path, success: t('session.destroy.success')
	end

	private

	def connected?
		redirect_to profile_path unless current_user.nil?
	end
end
