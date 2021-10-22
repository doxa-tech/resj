When("I complete the first step and submit it") do
  fill_in "card_name", with: "Waykup"
	fill_in "card_description", with: "Un groupe de jeunes"
	choiceselect "Groupe de jeunes", from: "card_type"
	click_button "Prochaine étape"
end

When("I complete the second step and submit it") do
  fill_in "card_street", with: "Route du verdel 8"
	remote_choiceselect "Bulle", from: "card_location"
	fill_in "card_place", with: "A l'église"
	find("#mapbox").click()
	click_button "Prochaine étape"
end

When("I complete the third step and submit it") do
	fill_in "card_email", with: "waykup@googlegroups.com"
  fill_in "card_website", with: "waykup.ch"
	fill_in "card_affiliation", with: "EEbulle"
	fill_choiceselect "card_tag_names", with: "camp"
	find("label[for=card_tag_names]").click()
	click_button "Aller à la confirmation"
end

When("I fill in an invalid email for the card") do
	fill_in "card_email", with: "invalid email"
end

Then("I should see the confirmation with card's information") do
	["Waykup", "Un groupe de jeunes", "Groupe de jeunes", "Route du verdel 8", "Bulle", 
		"A l'église", "waykup@googlegroups.com", "waykup.ch", "EEbulle", "camp"].each do |word|
		expect(page).to have_content word
	end
end