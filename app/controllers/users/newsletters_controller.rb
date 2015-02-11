class Users::NewslettersController < BaseController
	before_action :connected?
	layout 'admin'

	def new
		@user = current_user
	end

	def create
		@user = current_user
		@user.update_attributes(user_params)
		sign_in @user
		redirect_to user_notifications_path, success: "Vos préférences d'envoi des newsletters ont été mises à jour"
	end

	private

	def user_params
		params.require(:user).permit({ newsletter_ids: [] })
	end
end
