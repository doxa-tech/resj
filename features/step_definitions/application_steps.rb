When /^I visit "(.*?)"$/ do |path|
	visit path
end

Then /^I should see a flash with "(.*?)"$/ do |message|
	expect(page.find('#flash')).to have_content(message)
end

Then /^I should see "(.*?)"$/ do |content|
	expect(page).to have_content content
end