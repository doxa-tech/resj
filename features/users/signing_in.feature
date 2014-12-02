Feature: Signing in

	So I can access my profile
	As a visitor
	I want to sign in

	Background:
		Given I am a confirmed user

	@javascript
	Scenario: Valid signing in via the pop-up
		When I visit "/"
		And I click the link "Login"
		And I submit the signing in form with "john@smith.com" and "12341"
		Then I should see "John Smith"

	@javascript
	Scenario: Invalid signing in via the pop-up
		When I visit "/"
		And I click the link "Login"
		And I submit the signing in form with "" and ""
		Then I should see "Mot de passe et/ou utilisateur incorrect"

	Scenario: Valid signing in via the page
		When I visit "/connexion"
		And I submit the signing in form with "john@smith.com" and "12341"
		Then I should see a flash with "Connecté avec succès"

	Scenario: Invalid signing in via the page
		When I visit "/connexion"
		And I submit the signing in form with "" and ""
		Then I should see "Mot de passe et/ou utilisateur incorrect"