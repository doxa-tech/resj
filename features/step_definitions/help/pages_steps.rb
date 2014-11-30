Given /^there is a help page$/ do
  @page = create(:help_page)
end

When /^I visit a help category$/ do
  visit help_category_path(@page.category, locale: :fr)
end

When /^I click on a help page$/ do
  click_link @page.name
end

Then(/^I should see the page's content$/) do
  expect(page).to have_content @page.name
  expect(page).to have_content @page.content
end