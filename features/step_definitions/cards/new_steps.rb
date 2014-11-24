When /^I complete the first step and submit it$/ do
	step "I complete the first step"
	click_button "Prochaine étape"
	wait_for_ajax
end

When /^I complete the first step$/ do
	fill_in "card_name", with: "Waykup"
	fill_in "card_description", with: "Un groupe de jeunes"
	fill_in_selectized "card_card_type_id", with: "Groupe de jeunes"
end

When /^I complete the second step and submit it$/ do
	fill_in "card_street", with: "Route du verdel 8"
	fill_in_selectized "card_location_id", with: "Bulle"
	fill_in "card_place", with: "A l'église"
	click_button "geocode-addr"
	click_button "Prochaine étape"
	wait_for_ajax
end

When /^I complete the third step and submit it$/ do
	fill_in "card_email", with: "waykup@googlegroups.com"
	fill_in "card_responsables_attributes_0_firstname", with: "John"
	fill_in "card_responsables_attributes_0_lastname", with: "Smith"
	fill_in "card_responsables_attributes_0_email", with: "john@smith.com"
	click_button "Marquer comme propriétaire"
	click_button "Ajouter un responsable"
	fill_in "card_responsables_attributes_1_firstname", with: "Keran"
	fill_in "card_responsables_attributes_1_lastname", with: "Kocher"
	fill_in "card_responsables_attributes_1_email", with: "kocher.ke@resj.ch"
	click_button "Prochaine étape"
	wait_for_ajax
end

When /^I complete the fourth step and submit it$/ do
	fill_in "card_website", with: "waykup.ch"
	fill_in "card_affiliation", with: "EEbulle"
	fill_in_selectized "card_tag_names", with: "camp "
	click_button "Prochaine étape"
	wait_for_ajax
end

When /^I submit the card new form$/ do
	click_link "Envoyer"
end

Then /^I should see the final step$/ do
	expect(page).to have_link "Envoyer"
end

When /^I go back to the first step, edit the name and go to the final step$/ do
	click_button "Général"
	fill_in "card_name", with: "Way"
	click_button "aller à la fin"
	wait_for_ajax
end

Then /^I should see a summary of my card$/ do
	["Waykup", "Un groupe de jeunes", "Groupe de jeunes", "Route du verdel 8", "Bulle", \
		"A l'église", "kocher.ke@resj.ch", "waykup.ch", "EEbulle", "camp"].each do |content|
		expect(page).to have_content content
	end
end

Then /^I should see the updated attribute$/ do 
	expect(page).to have_content "Way"
end