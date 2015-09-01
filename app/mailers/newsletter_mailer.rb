class NewsletterMailer < BaseMailer

  # sends welcome
  def news(content, subject, emails, mandrill, options)
  	if mandrill
	    mandrill_mail to: emails,
	    	from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
        subject: subject,
        template: 'newsletter',
        params: { TEXT: content }
  	else
	  	@content = content
	    mail to: emails,
	    	from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
        subject: subject
	  end
  end

end
