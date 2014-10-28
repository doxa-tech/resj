Feature: Signing in

	So I can access my profile
	As a visitor
	I want to sign in

	Background:
		Given I am a confirmed user

	@javascript
	Scenario: Valid signing in via the pop-up
		When I sign in with "foo@bar.com" and "12341" in the pop-up
		Then I should see "John Smith"

	@javascript
	Scenario: Invalid signing in via the pop-up
		When I sign in with "" and "" in the pop-up
		Then I should see "Mot de passe et/ou utilisateur incorrect"

	Scenario: Valid signing in via the page
		When I sign in with "foo@bar.com" and "12341"
		Then I should see a flash with "Connecté avec succès"

	Scenario: Invalid signing in via the page
		When I sign in with "" and ""
		Then I should see "Mot de passe et/ou utilisateur incorrect"