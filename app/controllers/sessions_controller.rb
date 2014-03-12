class SessionsController < BaseController
	before_action :connected?, only: [:new]
	before_action :confirmed?, only: [:create]

	def new
		@user = User.new
	end

	def create
		if @user && @user.authenticate(params[:session][:password])
			params[:session][:remember_me] == '1' ? sign_in_permanent(@user) : sign_in(@user)
			respond_to do |format|
				format.html { redirect_back_or(profile_path, success: t('session.create.success')) }
				format.js { render 'success' }
			end
		else
			respond_to do |format|
				format.html { flash.now[:error] = t('session.create.error'); render 'new' }
				format.js { render 'error' }
			end
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

	def confirmed?
		@user = User.find_by_email(params[:session][:email].strip.downcase)
		redirect_to root_path, error: 'Your account is unconfirmed. Please see follow the link we sent you. <a data-method="post" href="/users/102/resend_mail" rel="nofollow">Resend mail</a>.'.html_safe unless @user.confirmed
	end
end
