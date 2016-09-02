Given /^I own a card$/ do
	@card = create(:card)
end

Given /^there is an active card$/ do
	@card = create(:active_card)
end

Then(/^I should no more see the card$/) do
  expect(find ".confirmed").not_to have_content "Waykup"
end
