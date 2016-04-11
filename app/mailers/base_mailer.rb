class BaseMailer < ActionMailer::Base
	helper MailerHelper

	default from: "\"Noémien de RES-J\" <noemien@resj.ch>"
	layout 'layouts/mailer'

end
