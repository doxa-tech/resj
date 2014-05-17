class Admin::NewslettersController < Admin::BaseController

	def new
	end

	def create
		NewsMailer.news(params[:content], params[:subject], params[:mails]).deliver
		Activity.create(action: "create", controller: "admin/newsletters")
		redirect_to new_admin_newsletter_path, success: t('newsletter.admin.new.success')
	end

end
