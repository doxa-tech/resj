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
	find('input#lat', visible: false).execute_script("this.value = 46")
	find('input#lng', visible: false).execute_script("this.value = 7")
	click_button "Prochaine étape"
end

When("I complete the third step and submit it") do
	fill_in "card_email", with: "waykup@googlegroups.com"
  fill_in "card_website", with: "waykup.ch"
	fill_in "card_affiliation", with: "EEbulle"
	fill_choiceselect "card_tag_names", with: "camp"
	click_button "Aller à la confirmation"
end

When("I successfully complete the signup form") do
	within ".signup" do
		fill_in "Prénom", with: "John"
		fill_in "Nom", with: "Smith"
		fill_in "Email", with: "john@smith.com"
		fill_in "Mot de passe", with: "choux"
		fill_in "Confirmation", with: "choux"
		click_button "Créer mon compte"
	end
end

Then("I should see the confirmation with card's information") do
	["Waykup", "Un groupe de jeunes", "Groupe de jeunes", "Route du verdel 8", "Bulle", 
		"A l'église", "waykup@googlegroups.com", "waykup.ch", "EEbulle", "camp"].each do |word|
		expect(page).to have_content word
	end
end