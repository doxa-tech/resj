Given /^I own a card$/ do
	@card = create(:card)
end

Given /^there is an active card$/ do
	@card = create(:active_card)
end