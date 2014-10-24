Given /^I am logged with email "(.*?)"$/ do |email|
	pending
end

Given /^a visitor$/ do
end

When /^I visit "(.*?)"$/ do |path|
	visit path
end

Then /^I should see a flash with "(.*?)"$/ do |message|
	expect(page.find('#flash')).to have_content(message)
end