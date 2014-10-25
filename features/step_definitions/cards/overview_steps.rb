When /^I go to the overview page of my card$/ do
  visit overview_card_path(@card, locale: :fr)
end

When /^I change the card from "Waykup" to "Way"$/ do
  first('.in-place').click
  fill_in 'card[name]', with: 'Way'
  first(:button, "Enregistrer").click
end

Then /^I should see "Way" in the input field$/ do
  expect(first '.in-place').to have_content "Way"
end

Then /^I should access the page$/ do
  expect(page).to have_content "#{@card.card_type.name} : #{@card.name}"
end