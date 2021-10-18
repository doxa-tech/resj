When("I successfully complete the orator form") do
  fill_in "Rue", with: "Route du moulin 13"
  remote_choiceselect "Bulle", from: "orator_location"
  choiceselect "Identité", from: "orator_theme_ids"
  fill_in "Description", with: "Je suis un bon orateur."
  fill_in "Disponibilités spéciales", with: "Hors vacances scolaires"
  find("label[for='orator_theme_ids']").click # TODO: remove if the design fixes the problem
  click_button "Envoyer"
end

When("I successfully complete the orator form for a visitor") do
  fill_in "Prénom", with: "John"
  fill_in "Nom", with: "Smith"
  fill_in "Email", with: "john@smith.com"
  fill_in "Mot de passe", with: "choux"
  fill_in "Confirmation", with: "choux"
  step "I successfully complete the orator form"
end