# Given I'm logged with email "nkcr.je@gmail.com"

Given(/^a card named "(.*?)" with owner "(.*?)"$/) do |name, email|
  session = {}
  session[:card_params] = {"name"=>name, "description"=>"description", "card_type_id"=>"1", "current_step"=>"final", "parent_ids"=>[""], "street"=>"rue", "location_id"=>"1", "place"=>"", "latitude"=>"46.57", "longitude"=>"6.879400000000032", "email"=>"", "responsables_attributes"=>{"0"=>{"firstname"=>"Firstname", "lastname"=>"Lastname", "email"=>email, "_destroy"=>"false", "is_contact"=>"true"}}, "website"=>"", "affiliation"=>"", "tag_names"=>""}
  @card = Card.create
end

When(/^I go to the overview page of the card "(.*?)"$/) do |arg1|
  visit "cards/#{Card.find_by_name(arg1).id}/overview?access=rubyforever"
end

Then(/^I should access the overview page of the card "(.*?)"$/) do |arg1|
  expect(page.body).to match(/Way/)
  expect(page.body).to match(/pony/)
end

# -----------------

# Given a card named "way" with owner "nkcr.je@gmail.com"

# Given I'm logged with email "nkcr.je@gmail.com"

When(/^I change the card named "(.*?)" to "(.*?)"$/) do |arg1, arg2|
	visit '/cards/1-way/overview?access=rubyforever'
	expect(page.body).to match(/Way/)
  expect(page.body).to match(/pony/)
  page.all('.in-place')[0].click
  expect(page.all('.in-place')[0][:id]).to match('ip-cur') 
  expect(page.all('.in-place form')[0][:style]).to match(/display\s*:\s*block/)
  fill_in 'card[name]', with: 'Waykup'
  page.all('input[type=submit]')[0].click
end

Then(/^I should see "(.*?)" on the overview page of "(.*?)"$/) do |arg1, arg2|
  wait_for_ajax
  expect(page.body).to match(/Waykup/)
end

