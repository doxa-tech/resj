class UserMailer < ApplicationMailer

  def confirmation(user)
    @url = confirmation_users_url(token: user.remember_token)
    mail(to: user.email, subject: "Confirmation de votre email sur reseaujeunesse.ch")
  end

  def password_reset(user)
    @user = user
    mail(to: user.email, subject: "Réinitialisation de votre mot de passe reseaujeunesse.ch")
  end

  def orator(user)
    @user = user
    mail(to: user.email, subject: "Vous êtes désormais un orateur sur Réseau Jeunesse")
  end
end
