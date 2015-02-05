When /^I select the card and send the request$/ do
	fill_in_selectized "card_id", with: "Waykup"
	click_button "Envoyer la requête"
end

Given /^I refused a card$/ do
  create(:affiliation, user_validated: false)
end

Given /^I recently made a card refused request$/ do
	create(:recent_affiliation, card_validated: false)
end 

Given /^a card sent me a request$/ do
	create(:affiliation, user_validated: nil)
end

Then /^I should see "(.*?)" in the (.*?) list$/ do |content, css|
	expect(find ".#{css}").to have_content content
end

Then /^I should not see "(.*?)" in the (.*?) list$/ do |content, css|
	expect(find ".#{css}").not_to have_content content
end