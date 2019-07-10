When("I complete the first step and submit it") do
  fill_in "card_name", with: "Waykup"
	fill_in "card_description", with: "Un groupe de jeunes"
	fill_in_selectized "card_card_type_id", with: "Groupe de jeunes"
end

When("I complete the second step and submit it") do
  fill_in "card_street", with: "Route du verdel 8"
	fill_in_selectized "card_location_id", with: "Bulle"
	fill_in "card_place", with: "A l'église"
	find('input#lat', visible: false).set(46)
	find('input#lng', visible: false).set(7)
	click_button "Prochaine étape"
end

When("I complete the third step and submit it") do
  fill_in "card_email", with: "waykup@googlegroups.com"
end

When("I complete the fourth step and submit it") do
  fill_in "card_website", with: "waykup.ch"
	fill_in "card_affiliation", with: "EEbulle"
	fill_in_selectized "card_tag_names", with: "camp "
	click_button "Prochaine étape"
end

When("I confirm and submit my card") do
  click_link "Envoyer"
end