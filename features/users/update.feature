Feature: Update my account

	So I can change information about me
	As I a user
	I want to update my account

	Background:
		Given I am a confirmed user
		And I am signed in

	Scenario: Valid form submission
		When I visit "/user/edit"
		And I change my user attributes
		Then I should see a flash with "Profil mis à jour"
		And I should see my updated user attributes

	Scenario: Invalid form submission
		When I visit "/user/edit"
		And I do not complete the current password
		And I change my firstname with an invalid value
		And I click the button "Mettre à jour"
		Then I should see errors for the fields "Mot de passe actuel, Prénom"

	Scenario: Password update
		When I visit "/user/edit"
		And I change my password
		And I sign out
		And I sign in with "john@smith.com" and "poney"
		Then I should see a flash with "Connecté avec succès"