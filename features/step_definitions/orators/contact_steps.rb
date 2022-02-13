Given('there is a visible orator') do
  step "I am a visible orator"
end

When('I visit the orator\'s page') do
  visit orator_path(@orator)
end

When('I complete the contact form') do
  fill_in "Ton message", with: "Je souhaite vous inviter"
  fill_in "Ton email", with: "foo@bar.com"
  fill_in "Combien font 2+2?", with: "4"
  click_button "Envoyer"
end

When('I complete the contact form with a wrong verification') do
  fill_in "Ton message", with: "Je souhaite vous inviter"
  fill_in "Ton email", with: "foo@bar.com"
  fill_in "Combien font 2+2?", with: "5"
  click_button "Envoyer"
end

Then('the orator should receive an email') do
  step '"' +  @orator.user.email  + '" should receive an email'
end
