class UserMailer < ActionMailer::Base
  default from: "kocher.ke@gmail.com"

  def password_reset(user)
  	@user = user
  	mail to: user.email, subject: "Reset password"
  end
end
