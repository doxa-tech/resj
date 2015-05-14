Given(/^I am authorized to invite orators$/) do
  @user = create(:user)
  create(:ownership, element_name: "admin/users", user: @user, actions: [create(:action, name: "invite")])
end

When(/^I complete the invitation form$/) do
  fill_in "Emails", with: "foo@bar.com"
  multiselect "email-select", with: "Keran Kocher"
  click_button "Envoyer"
end