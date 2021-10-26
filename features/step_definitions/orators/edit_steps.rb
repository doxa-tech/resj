When("I visit the page to edit the orator profile") do
  permission = create(:permission, element_name: "orators", edit_right: true)
  token = create(:token, permission: permission)
  visit "/profile/orator/edit?token=#{token.token}"
end