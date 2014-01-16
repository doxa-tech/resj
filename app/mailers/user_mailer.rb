class UserMailer < ActionMailer::Base
  default from: "kocher.ke@gmail.com"

  def signup_confirmation(user)
  	@user = user
  	mail to: user.email, subject: "Signup confirmation"
  end
end
