When /^I visit "(.*?)"$/ do |path|
	visit path
end

When /^I do not complete the form and I submit it$/ do
	first('input[type="submit"]').click
end

Then /^I should see a flash with "(.*?)"$/ do |message|
	expect(page.find('#flash')).to have_content(message)
end

Then /^I should see "(.*?)"$/ do |content|
	expect(page).to have_content content
end

Then /^I should see errors for the fields "(.*?)"$/ do |fields|
	fields.split(",").each do |field|
		expect(find('#error')).to have_content field
	end
end