@user_types
Feature: Signing up

	So I can have a profile
	As a visitor
	I want to create a account

	Scenario: Valid form submission
		Given I am a visitor
		When I visit "/inscription"
		And I complete and submit the signing up form correctly
		Then I should see a flash with "Votre compte a été créé ! Vous allez recevoir un email pour confirmer votre compte."

	Scenario: Invalid form submission
		Given I am a visitor
		When I visit "/inscription"
		And I do not complete the form and submit it
		Then I should see errors for the fields "Prénom, Nom, Email, Mot de passe, Confirmation du mot de passe"

	Scenario: Confirm account after valid form submission
		Given I signed up
		When I open the email with subject "Confirmation de votre email"
		And I click the first link in the email
		Then I should see a flash with "Compte confirmé. Vous êtes maintenant connecté !"

	@javascript
	Scenario: Can not sign in when did not confirm the account
		Given I am an unconfirmed user
		When I sign in with "john@smith.com" and "12341"
		Then I should see "Renvoyer l'email"