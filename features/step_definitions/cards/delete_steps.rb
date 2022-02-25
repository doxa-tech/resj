When("I fill in the card's name") do
  fill_in "Nom du groupe", with: @card.name
end

Then('I should not see the group anymore') do
  expect(page).not_to have_content @card.name
end