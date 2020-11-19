When("I visit the card's update page") do
  visit edit_users_card_path(@card)
end

When("I update the card's name with {string}") do |name|
  fill_in "Nom du groupe", with: name
  click_button "Enregistrer"
end
