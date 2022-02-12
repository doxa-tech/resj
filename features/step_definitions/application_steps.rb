Given("I am a visitor") do
end

Given("I am a confirmed user") do
  @user = create(:user, confirmed: true)
end

Given('I am an unconfirmed user') do
  @user = create(:user, confirmed: false)
end



Given("I am signed in") do
  visit signin_path
  fill_in "Email", with: "john@smith.com"
  fill_in "Mot de passe", with: "choux"
  click_button "Connexion"
end

When("I visit {string}") do |path|
	visit path
end

When("I click the button {string}") do |button|
  click_button button
end

When("I click the link {string}") do |link|
  click_link link
end

When("I wait {int} hours") do |int|
  travel int.hours
end

When("I miscomplete the form") do
  find("form").find("input[type=submit]").click
end

Then("I should see a flash with {string}") do |message|
	expect(find '#flash').to have_content(message)
end

Then("I should see errors for the fields {string}") do |fields|
	fields.split(",").map(&:strip).each do |field|
		expect(find '#error').to have_content field
	end
end

Then("I should not see errors for the fields {string}") do |fields|
  fields.split(",").each do |field|
		expect(find '#error').not_to have_content field
	end
end

Then ("I should see {string}") do |content|
  expect(page).to have_content content
end

Then ("I should not see {string}") do |content|
  expect(page).not_to have_content content
end
