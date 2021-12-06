When('I enter the email of another user') do
  email = "another@bar.com"
  @another_user = create(:user, email: email, confirmed: true)
  fill_in "Email", with: email
end

When('I enter the email that does not exist') do
  fill_in "Email", with: "nil@bar.com"
end