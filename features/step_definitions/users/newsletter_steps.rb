When /^I unchecked a newsletter and submit the form$/ do
	check "News"
	click_button "Mettre à jour"
end

When /^I should see the unckecked newsletter$/ do
	expect(find_field("News")).to be_checked
end