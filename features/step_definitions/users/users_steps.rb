Given /^I am signed in$/ do 
	visit '/connexion'
	fill_in 'session_email', with: "john@smith.com"
	fill_in 'session_password', with: "12341"
	click_button "Connexion"
end

Given /^I am signed in as the card owner$/ do
	visit '/connexion'
	fill_in 'session_email', with: "bill@gates.com"
	fill_in 'session_password', with: "12341"
	click_button "Connexion"
end

Given /^(?:I am|there is) a confirmed user$/ do
	@user = create(:user)
end

Given /^I am a orator$/ do
	@user = create(:orator).user
end

When /^I sign out$/ do
	find_link('Déconnexion', match: :first).click
end

When /^I sign in with "(.*?)" and "(.*?)"$/ do |email, password|
	visit "/connexion"
	fill_in 'session_email', with: email
	fill_in 'session_password', with: password
	click_button "Connexion"
end