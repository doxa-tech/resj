class OratorMailer < BaseMailer

  # sends welcome
  def news(content,subject,mails)
    mail to:      user.email,
         subject: subject,
         body:
    params({NAME: user.firstname}) # variables
    template 'orator-created'  # template
  end

end
