class OratorMailer < BaseMailer

  # sends welcome
  def orator_created(user)
    @name = user.firstname
    mail to: user.email, subject: 'Enregistrement sur le réseau jeunesse'
  end

end
