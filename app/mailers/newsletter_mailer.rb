class NewsletterMailer < BaseMailer

  # sends welcome
  def news(content,subject,mails)
  	@content = content
    mail to:      user.email,
         subject: subject,
    #template nil  # template
  end

end
