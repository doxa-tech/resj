class OratorMailer < BaseMailer

  # sends welcome
  def orator_created(user)
    mail to:      user.email,
         subject: 'Enregistrement sur le réseau jeunesse',
         body:
    params({NAME: user.firstname}) # variables
    template 'orator-created'  # template
  end

end
