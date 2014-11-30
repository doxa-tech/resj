Then /^I should see links to the categories$/ do
  expect(page).to have_link('Images des groupes')
end

Then /^I should see links to help pages$/ do
  expect(page).to have_link(@page.name)
end