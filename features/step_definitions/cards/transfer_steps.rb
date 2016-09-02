When(/^I click the transfer button$/) do
  click_link "Transférer le groupe"
end

When(/^I choose an user to receive the card$/) do
  create(:user, firstname: "Fred", lastname: "Vegas")
  fill_in_selectized "user", with: "Fred Vegas"
end

When(/^I confirm transfering the card$/) do
  fill_in "Nom du groupe", with: "Waykup"
  click_button "Transférer"
end

When(/^I mistype the name of the card$/) do
  fill_in "Nom du groupe", with: "Wrong name"
  click_button "Transférer"
end

When(/^I choose myself to receive the card$/) do
  fill_in_selectized "user", with: "Bill Gates"
end

Then(/^I should see the error "(.*?)" in the transfer form$/) do |error|
  expect(find "#error").to have_content error
end
