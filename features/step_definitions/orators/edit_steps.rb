Given('I am an invisible orator') do
  @orator = create(:orator, disabled: true)
end

Given('I am a visible orator') do
  @orator = create(:orator, disabled: false)
end

When('I visit the page to update my orator profile') do
  visit "/profile/orator/edit"
end