When /^I sign in$/ do
	visit '/'
	click_link 'Login'
	fill_in 'session_email', with: 'foo@bar.com'
	fill_in 'session_password', with: '12341'
	click_button "Connexion"
end