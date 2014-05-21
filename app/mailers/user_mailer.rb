class UserMailer < ActionMailer::Base

  def confirmation(user)
    mail to:      user.email,
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Confirmation de votre email',
         body:
    headers['X-MC-MergeVars'] = {
                                  NAME: user.firstname,
                                  URL: user_confirmation_url(token: user.remember_token)
                                }.to_json # variables
    headers['X-MC-Template'] = "user-confirmation"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

  def password_reset(user)
  	mail to: user.email, subject: "Reset password"
  end

  # someone wants to affiliate you with a card
  def request(card, user)
  end

  # your request to join a card was accepted
  def confirmed_card(card, user)
  end

  # your request to join a card wasn't accepted
  def unconfirmed_card(card, user)
  end
end
