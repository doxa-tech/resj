class NewsletterMailer < BaseMailer

  # sends welcome
  def news(content, subject, emails, mandrill, options)
  	emails = User.joins(:newsletters).where(email: emails, newsletters: {id: options}).pluck(:email)
  	if mandrill
	    mail to:      emails,
	    		 from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
	         subject: subject,
	         body:
	    params({TEXT: content}) # variables
	    template 'newsletter'  # template
  	else
	  	@content = content
	    mail 	to:      emails,
	    			from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
	         	subject: subject
	  end
  end

end
