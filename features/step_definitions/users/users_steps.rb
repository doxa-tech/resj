Given /^I am signed in$/ do 
	visit '/connexion'
	fill_in 'session_email', with: "foo@bar.com"
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