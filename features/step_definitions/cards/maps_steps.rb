Then /^I should see the card on the map$/ do
	expect(page).to have_content @card.name
end