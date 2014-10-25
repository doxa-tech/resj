Given /^I am a confirmed user and not signed in$/ do
	@user = create(:user)
end

When /^I sign in with "(.*?)" and "(.*?)" in the pop-up$/ do |email, password|
	visit '/'
	click_link 'Login'
	fill_in 'session_email', with: email
	fill_in 'session_password', with: password
	click_button "Connexion"
end

When /^I sign in with "(.*?)" and "(.*?)"$/ do |email, password|
	visit '/connexion'
	fill_in 'session_email', with: email
	fill_in 'session_password', with: password
	click_button "Connexion"
end