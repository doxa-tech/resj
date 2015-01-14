Given /^I go to the team page of my card$/ do
	visit card_team_path(@card, locale: :fr)
end

Given /^a user sent a request to my card$/ do
	create(:affiliation, card_validated: nil)
end

Given /^I recently made an user refused request$/ do
	create(:recent_affiliation, user_validated: false)
end 

When /^I select the user and send the request$/ do
	fill_in_selectized "user_id", with: "John Smith"
	click_button "Envoyer la requête"
end