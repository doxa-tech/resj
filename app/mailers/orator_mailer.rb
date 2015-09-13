class OratorMailer < BaseMailer

  # sends welcome
  def orator_created(user)
    mandrill_mail to: user.email,
      subject: 'Enregistrement sur le réseau jeunesse',
      template: 'orator-created',
      params: { NAME: user.firstname }
  end

end
