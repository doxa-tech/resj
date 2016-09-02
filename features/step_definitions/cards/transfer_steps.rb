When(/^I click the transfer button$/) do
  click_link "Transférer le groupe"
end

When(/^I submit the form after choosing an new user$/) do
  create(:user, firstname: "Fred", lastname: "Vegas")
  fill_in_selectized "user", with: "Fred Vegas"
  click_button "Transférer"
end
