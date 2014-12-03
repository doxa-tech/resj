When /^I visit the orator page with the right token$/ do
	token = build(:access_token) do |token|
		token.ownership = create(:ownership, element_name: 'orators', group_name: 'g_token', right_create: true)
		token.save
	end
	visit "/resources/orators/new?token=#{token.token}"
end

When /^I complete the orator form and submit it$/ do
	fill_in 'user_email', with: 'foo@bar.com'
	fill_in 'user_firstname', with: 'Foo'
	fill_in 'user_lastname', with: 'Bar'
	fill_in 'user_password', with: '12341'
	fill_in 'user_password_confirmation', with: '12341'
	step "I complete the orator fields"
	click_button "S'inscrire"
end

When /^I complete the orator fields$/ do
	fill_in_selectized 'user_orator_attributes_location_id', with: 'Bulle'
	fill_in 'user_orator_attributes_street', with: 'Rue du château 26'
	fill_in 'user_orator_attributes_phone', with: '0291112233'
	fill_in_selectized 'user_orator_attributes_theme_ids', with: "L'argent"
	fill_in 'user_orator_attributes_disponibility', with: 'Pendant les vacances'
	fill_in 'user_orator_attributes_description', with: 'Je suis un bon orateur'
end

When /^I complete the current password field$/ do
	fill_in 'user_current_password', with: "12341"
end

Then /^I should see my information in the fields$/ do
	expect(page).to have_field('user_email', with: @user.email)
	expect(page).to have_field('user_firstname', with: @user.firstname)
	expect(page).to have_field('user_lastname', with: @user.lastname)
	expect(page).to have_field('user_lastname', with: @user.lastname)
end