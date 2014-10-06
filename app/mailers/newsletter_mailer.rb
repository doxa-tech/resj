class NewsletterMailer < BaseMailer

  # sends welcome
  def news(content,subject,mails, mandrill)
  	if mandrill
	    mail to:      mails,
	    		 from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
	         subject: subject,
	         body:
	    params({TEXT: content}) # variables
	    template 'newsletter'  # template
  	else
	  	@content = content
	    mail 	to:      mails,
	    			from: "\"Team Réseau Jeunesse\" <info@resj.ch>",
	         	subject: subject
	  end
  end

end
