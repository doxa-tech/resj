When(/^I click the delete button and confirm deleting the card$/) do
  click_link "Supprimer le groupe"
  fill_in "Nom du groupe", with: "Waykup"
  click_button "Supprimer"
end

When(/^I click the delete button and mistype the name of the card$/) do
  click_link "Supprimer le groupe"
  fill_in "Nom du groupe", with: "Wrong name"
  click_button "Supprimer"
end

Then(/^I should see an error in the delete form$/) do
  expect(find "#error").to have_content 'Le champs "Nom" ne correspond pas'
end

Then(/^I should no more see the card$/) do
  expect(find ".confirmed").not_to have_content "Waykup"
end
