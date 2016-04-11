class NewsletterMailer < BaseMailer
  layout false

  def news(subject, emails)
	   mail to: emails, from: "\"Team Réseau Jeunesse\" <info@resj.ch>", subject: subject
  end

end
