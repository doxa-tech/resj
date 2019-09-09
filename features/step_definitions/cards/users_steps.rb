
Then("I should see the card wizard") do
  expect(page).to have_content "Enregistrer un nouveau groupe"
end

Then("I should see the sign in and up page") do
  expect(page).to have_content "Se connecter"
  expect(page).to have_content "S'inscrire"
end