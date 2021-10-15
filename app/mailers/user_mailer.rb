class UserMailer < ApplicationMailer

  def confirmation(user)
    @user = user
    mail(to: user.email, subject: "Confirmation de votre email sur reseaujeunesse.ch")
  end

  def password_reset(user)
    @user = user
    mail(to: user.email, subject: "Réinitialisation de votre mot de passe reseaujeunesse.ch")
  end
end
