class SessionsController < BaseController
	before_action :connected?, only: [:new, :create]
	before_action :confirmed?, only: [:create]

	def new
		@user = User.new
	end

	def create
		if @user && @user.authenticate(params[:session][:password])
			sign_in(@user, permanent: params[:session][:remember_me].to_bool)
			Connection.create(user: @user, ip: request.remote_ip)
			respond_to do |format|
				format.html { redirect_back_or(profile_path, success: t('session.create.success')) }
				format.js { render 'success' }
			end
		else
			respond_to do |format|
				format.html do 
					flash.now[:error] = t('session.create.error') 
					render 'new'
				end
				format.js { render 'error', locals: { message: t('session.create.error') } }
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
		@user = User.users.find_by_email(params[:session][:email].strip.downcase)
		if @user && !@user.confirmed
			respond_to do |format|
				format.html { redirect_to root_path, error: render_error("unconfirmed") }
				format.js { render 'error', locals: { message: render_error("unconfirmed") } }
			end
		end
	end
end
