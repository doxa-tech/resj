class OratorMailer < ApplicationMailer

  # email sent to ask orators to set their profiles in public
  def migration(orator)
    @orator = orator
    @url = orator_update_profile_url(remember_token: @orator.user.remember_token)
    mail(to: orator.user.email, subject: "Votre profil orateur sur Réseau Jeunesse")
  end

end
