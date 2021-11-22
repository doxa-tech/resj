Given('I am an invisible orator') do
  @orator = create(:orator, disabled: true)
end

Given('I am a visible orator') do
  @orator = create(:orator, disabled: false)
end

When('I visit the page to update the orator profile') do
  permission = create(:permission, element_name: "orators", update_right: true)
  token = create(:token, permission: permission)
  visit "/profile/orator/edit?token=#{token.token}"
end

Then('I should not see a link {string}') do |string|
  expect(page).not_to have_content string
end

Then('I should see a link {string}') do |string|
  expect(page).to have_content string
end