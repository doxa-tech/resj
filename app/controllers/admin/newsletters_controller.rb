class Admin::NewslettersController < Admin::BaseController

	def new
		@orators = User.joins(:orator).uniq
    @owners = User.joins(:cards).uniq
		@resps = (User.joins(:card_users).where(card_users: {user_validated: true, card_validated: true}) - @owners).uniq
		@users = (User.users - @orators - @owners - @resps).uniq
	end

	def create
		NewsletterMailer.news(params[:content], params[:subject], params[:emails], params[:mandrill], params[:options]).deliver_now
		Activity.create(action: "create", controller: "admin/newsletters")
		redirect_to new_admin_newsletter_path, success: t('newsletter.admin.new.success')
	end

end
