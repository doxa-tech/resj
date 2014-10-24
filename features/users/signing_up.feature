Feature: Signing up

	So I can have a profile
	As a visitor
	I want to create a account

	Scenario: Successful form submission
		Given a visitor
		When I visit "/inscription"
		And I complete and submit the form correctly
		Then I should see a flash with "Votre compte a été créé ! Vous allez recevoir un email pour confirmer votre compte."

	Scenario: Invalid form submission
		Given a visitor
		When I visit "/inscription"
		And I do not complete the form and I submit it
		Then I should see form's errors

	Scenario: Confirm account after valid form submission
		Given a unconfirmed user
		When I click the confirmation link
		Then I should see a flash with "Compte confirmé. Vous êtes maintenant connecté !"

	@javascript
	Scenario: Can not sign in when did not confirm the account
		Given a unconfirmed user
		When I sign in
		Then I should see a notice
