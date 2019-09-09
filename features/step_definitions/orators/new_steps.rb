When("I successfully complete the orator form") do
  fill_in "Rue", with: "Route du moulin 13"
  remote_choiceselect "Bulle", from: "orator_location"
  choiceselect "Identité", from: "orator_theme_ids"
  fill_in "Description", with: "Je suis un bon orateur."
  fill_in "Disponibilités spéciales", with: "Hors vacances scolaires"
  fill_in "Téléphone", with: "+41291112233"
  find("label[for='orator_theme_ids']").click # TODO: remove if the design fixes the problem
  click_button "Envoyer"
end