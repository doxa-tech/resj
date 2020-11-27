When /^I visit "(.*?)"$/ do |path|
	visit path
end

When /^I do not complete the form and submit it$/ do
	first('input[type="submit"]').click
end

When /^I click the button "(.*?)"$/ do |content|
	click_button content
end

When /^I click the label "(.*?)"$/ do |content|
	find("label[for='#{content}']").click
end

When /^I click the link "(.*?)"$/ do |content|
	click_link content
end

Then /^I should see a flash with "(.*?)"$/ do |message|
	expect(find '#flash').to have_content(message)
end

Then /^I should see "(.*?)"$/ do |content|
	expect(page).to have_content content
end

Then /^I should see errors for the fields "(.*?)"$/ do |fields|
	fields.split(",").each do |field|
		expect(find '#error').to have_content field.strip
	end
end

Then /^I should see errors$/ do
	expect(page).to have_css('#error', text: /.*/)
end

Then /^I should see "(.*?)" in a list$/ do |content|
	expect(page).to have_css("li", text: content)
end