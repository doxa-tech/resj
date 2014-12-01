Given /^there are many help pages$/ do
  @page_1 = create(:help_page)
  @page_2 = create(:help_page, name: "Mettre à jour son groupe")
end

Then /^I should see links to the categories$/ do
  expect(page).to have_link('Images des groupes')
end

Then /^I should see to help pages$/ do
  expect(page).to have_content(@page_1.name)
  expect(page).to have_content(@page_1.content)
  expect(page).to have_content(@page_2.name)
  expect(page).to have_content(@page_2.content)
end