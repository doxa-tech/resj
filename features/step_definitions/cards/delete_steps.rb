When(/^I click the delete button and confirm deleting the card$/) do
  click_link "Supprimer le groupe"
  fill_in "card_name", with: "Waykup"
  click_button "Supprimer"
end

When(/^I click the delete button and mistype the name of the card$/) do
  click_link "Supprimer le groupe"
  fill_in "card_name", with: "Wrong name"
  click_button "Supprimer"
end

Then(/^I should see an error in the delete form$/) do
  expect(find "#error").to have_content 'Le champs "Nom" ne correspond pas'
end
