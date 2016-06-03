class Admin::NewslettersController < Admin::BaseController

	def new
		js 'form'
		@orators = User.joins(:orator).uniq
    @owners = User.joins(:cards).uniq
		@resps = (User.joins(:card_users).where(card_users: {user_validated: true, card_validated: true}) - @owners).uniq
		@users = (User.users - @orators - @owners - @resps).uniq
	end

	def create
		js 'form'
		emails = User.joins(:newsletters).where(email: params[:emails], newsletters: { id: params[:options] }).uniq.pluck(:email)
		send_mailgun_newsletter(emails, params[:subject], params[:content])
		# NewsletterMailer.news(params[:subject], emails).deliver_now
		Activity.create(action: "create", controller: "admin/newsletters")
		redirect_to new_admin_newsletter_path, success: t('newsletter.admin.new.success')
	end

	private

	# Mailgun uses 'recipient-variables' to know if it must hide recipients from
	# the 'from' email field.
	def send_mailgun_newsletter(to, subject, content, emails_params = {})
		Mailgun().messages.send_email({
			to:      to,
			subject: subject,
			html:    content,
			from:    "Team Réseau Jeunesse <info@resj.ch>",
			"recipient-variables": emails_params.to_json
		})
	end

end
