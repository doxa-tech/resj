When("I complete the first step and submit it") do
  fill_in "card_name", with: "Waykup"
	fill_in "card_description", with: "Un groupe de jeunes"
	slimselect "Groupes de jeunes", from: "card_type"
	click_button "Prochaine étape"
end

When("I complete the second step and submit it") do
  fill_in "card_street", with: "Route du verdel 8"
	remote_slimselect "Bulle", from: "card_location"
	fill_in "card_place", with: "A l'église"
	find('input#lat', visible: false).execute_script("this.value = 46")
	find('input#lng', visible: false).execute_script("this.value = 7")
	click_button "Prochaine étape"
end

When("I complete the third step and submit it") do
	fill_in "card_email", with: "waykup@googlegroups.com"
  fill_in "card_website", with: "waykup.ch"
	fill_in "card_affiliation", with: "EEbulle"
	remote_slimselect "camp", from: "card_tag_names"
	click_button "Aller à la confirmation"
end

When("I confirm and submit my card") do
  click_link "Envoyer"
end