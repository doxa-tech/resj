# Given I'm logged with email "nkcr.je@gmail.com"

Given /^a card named "(.*?)" with owner "(.*?)"$/ do |name, email|
  pending
end

When /^I go to the overview page of the card "(.*?)"$/ do |name|
  visit "cards/#{Card.find_by_name(name).id}/overview"
end

Then /^I should access the overview page of the card "(.*?)"$/ do |name|
  expect(page.body).to match(/Way/)
  expect(page.body).to match(/pony/)
end

# -----------------

# Given a card named "way" with owner "nkcr.je@gmail.com"

# Given I'm logged with email "nkcr.je@gmail.com"

When /^I change the card named "(.*?)" to "(.*?)"$/ do |arg1, arg2|
	visit '/cards/1-way/overview?access=rubyforever'
	expect(page.body).to match(/Way/)
  expect(page.body).to match(/pony/)
  page.all('.in-place')[0].click
  expect(page.all('.in-place')[0][:id]).to match('ip-cur') 
  expect(page.all('.in-place form')[0][:style]).to match(/display\s*:\s*block/)
  fill_in 'card[name]', with: 'Waykup'
  page.all('input[type=submit]')[0].click
end

Then /^I should see "(.*?)" on the overview page of "(.*?)"$/ do |arg1, arg2|
  wait_for_ajax
  expect(page.body).to match(/Waykup/)
end

