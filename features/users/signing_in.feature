Feature: Signing in

	So I can access my profile
	As a visitor
	I want to sign in

	Scenario: Valid signing in
		Given I am a confirmed user and not signed in
		When I sign in with "foo@bar.com" and "12341"
		Then I should see "John Smith"

	Scenario: Invalid signing in
		Given I am a confirmed user and not signed in
		When I sign in with "" and ""
		Then I should see "Mot de passe et/ou utilisateur incorrect"