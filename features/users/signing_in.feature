Feature: Signing in

	So I can access my profile
	As a visitor
	I want to sign in

	@javascript
	Scenario: Valid signing in via the pop-up
		Given I am a confirmed user and not signed in
		When I sign in with "foo@bar.com" and "12341" in the pop-up
		Then I should see "John Smith"

	@javascript
	Scenario: Invalid signing in via the pop-up
		Given I am a confirmed user and not signed in
		When I sign in with "" and "" in the pop-up
		Then I should see "Mot de passe et/ou utilisateur incorrect"

	Scenario: Valid signing in via the page
		Given I am a confirmed user and not signed in
		When I sign in with "foo@bar.com" and "12341"
		Then I should see a flash with "Connecté avec succès"

	Scenario: Invalid signing in via the page
		Given I am a confirmed user and not signed in
		When I sign in with "" and ""
		Then I should see "Mot de passe et/ou utilisateur incorrect"