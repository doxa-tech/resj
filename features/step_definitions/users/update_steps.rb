When /^I change my user attributes$/ do
	fill_in 'user_current_password', with: '12341'
	fill_in 'user_email', with: 'jean@fontaine.com'
	fill_in 'user_firstname', with: 'Jean'
	fill_in 'user_lastname', with: 'Fontaine'
	click_button 'Mettre à jour'
end

When /^I do not complete the current password$/ do
end

When /^I change my firstname with an invalid value$/ do
	fill_in 'user_firstname', with: ''
end

When /^I change my password$/ do
	fill_in 'user_current_password', with: '12341'
	fill_in 'user_password', with: 'poney'
	fill_in 'user_password_confirmation', with: 'poney'
	click_button 'Mettre à jour'
end

Then /^I should see my updated user attributes$/ do
	expect(page).to have_field("Email", with: 'jean@fontaine.com')
	expect(page).to have_field("Prénom", with: 'Jean')
	expect(page).to have_field("Nom", with: 'Fontaine')
end