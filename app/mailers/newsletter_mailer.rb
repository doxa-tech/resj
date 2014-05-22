class NewsletterMailer < BaseMailer

  # sends welcome
  def news(content,subject,mails)
  	@content = content
    mail to:      mails,
    			from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
         subject: subject
  end

end
