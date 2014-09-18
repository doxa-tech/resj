Given(/^I'm logged with email "(.*?)"$/) do |arg1|
	@current_user = User.find_by_email(arg1)
	@current_user.update_attribute(:confirmed, true)
	@current_user.update_attribute(:password, '12341')
	visit 'connexion?access=rubyforever'
  fill_in 'session[email]', with: arg1
  fill_in 'session[password]', with: '12341'
  click_button 'Connexion'
end