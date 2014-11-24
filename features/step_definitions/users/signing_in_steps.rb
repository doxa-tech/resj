When /^I submit the signing in form with "(.*?)" and "(.*?)"$/ do |email, password|
	fill_in 'session_email', with: email
	fill_in 'session_password', with: password
	click_button "Connexion"
end