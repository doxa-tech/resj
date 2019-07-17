When("I sign in") do
  fill_in "Email", with: "john@smith.com"
  fill_in "Mot de passe", with: "choux"
end

Then("I should see the card wizard") do
  pending # Write code here that turns the phrase above into concrete actions
end