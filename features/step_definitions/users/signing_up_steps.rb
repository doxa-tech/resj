Given /^I am an unconfirmed user$/ do
	@user = FactoryGirl.create(:unconfirmed_user)
end

When /^I complete and submit the form correctly$/ do 
	fill_in 'user_email', with: 'foo@bar.com'
	fill_in 'user_firstname', with: 'Foo'
	fill_in 'user_lastname', with: 'Bar'
	fill_in 'user_password', with: '12341'
	fill_in 'user_password_confirmation', with: '12341'
	click_button "S'inscrire"
end

When /^I do not complete the form and I submit it$/ do
	click_button "S'inscrire"
end

When /^I click the confirmation link$/ do
	visit user_confirmation_url(token: @user.remember_token)
end 

Then(/^I should see signing up form's errors$/) do
	section = page.find('#error')
	expect(section).to have_content "Prénom"
	expect(section).to have_content "Nom"
	expect(section).to have_content "Email"
	expect(section).to have_content "Mot de passe"
	expect(section).to have_content "Confirmation du mot de passe"
end