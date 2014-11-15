Given /^I am a visitor$/ do
end

Given /^I am an unconfirmed user$/ do
	@user = create(:unconfirmed_user)
end

Given /^I signed up$/ do
	visit '/inscription'
	step "I complete and submit the signing up form correctly"
end

When /^I complete and submit the signing up form correctly$/ do 
	fill_in 'user_email', with: 'foo@bar.com'
	fill_in 'user_firstname', with: 'Foo'
	fill_in 'user_lastname', with: 'Bar'
	fill_in 'user_password', with: '12341'
	fill_in 'user_password_confirmation', with: '12341'
	click_button "S'inscrire"
end

When /^I click the confirmation link$/ do
	visit user_confirmation_url(token: @user.remember_token)
end 