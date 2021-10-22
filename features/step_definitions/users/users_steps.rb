When("I sign in") do
  within ".cb-signin" do
    fill_in "Email", with: "john@smith.com"
    fill_in "Mot de passe", with: "choux"
    click_button "Connexion"
  end
end

When("I successfully complete the signup form") do
	within ".cb-signup" do
		fill_in "Prénom", with: "John"
		fill_in "Nom", with: "Smith"
		fill_in "Email", with: "john@smith.com"
		fill_in "Mot de passe", with: "choux"
		fill_in "Confirmation", with: "choux"
		click_button "Créer mon compte"
	end
end