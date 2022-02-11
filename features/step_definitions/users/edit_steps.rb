Given('I update my firstname with {string}') do |string|
  fill_in "Mot de passe actuel", with: "choux"
  fill_in "Prénom", with: string
  click_button "Enregistrer"
end

Given('I update my firstname without a correct password') do
  fill_in "Mot de passe actuel", with: "wrong password"
  fill_in "Prénom", with: "anything"
  click_button "Enregistrer"
end