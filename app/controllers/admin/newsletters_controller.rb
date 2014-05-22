class Admin::NewslettersController < Admin::BaseController

	def new
		@orators = User.joins(:orator)
    @owners = User.joins(:cards)
		@resps = User.joins(:card_users).where(card_users: {user_validated: true, card_validated: true}) - @owners
		@users = User.users - @orators - @owners - @resps
	end

	def create
		NewsletterMailer.news(params[:content], params[:subject], params[:emails]).deliver
		Activity.create(action: "create", controller: "admin/newsletters")
		redirect_to new_admin_newsletter_path, success: t('newsletter.admin.new.success')
	end

end
