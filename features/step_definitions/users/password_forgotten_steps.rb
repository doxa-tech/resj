Given /^I requested a reset$/ do
  @user.send_password_reset
end

Given /^I requested a reset three hours ago$/ do
  Timecop.freeze(Time.now - 3.hours) do
    @user.send_password_reset
  end
end

When /^I visit the page to reset$/ do
  visit edit_password_reset_url(id: @user.reset_token, locale: :fr)
end

When /^I submit the form with my new password$/ do
  fill_in "user_password", with: "poney"
  fill_in "user_password_confirmation", with: "poney"
  click_button "Mettre à jour"
end

When /^I submit the form with my email$/ do 
  fill_in "email", with: "john@smith.com"
  click_button "Réinitialiser le mot de passe"
end