Given(/^I'm logged with email "(.*?)"$/) do |arg1|
	@current_user = User.create!(
		email: arg1,
		firstname: 'firstname',
		lastname: 'lastname',
		password: '12341',
		confirmed: true
		)
	visit 'connexion?access=rubyforever'
  fill_in 'session[email]', with: arg1
  fill_in 'session[password]', with: '12341'
  click_button 'Connexion'
end