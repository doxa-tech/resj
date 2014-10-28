Feature: Orators

	So I can appear as an orator
	As a visitor
	I want to create an orator account

	Background:
		Given I am a visitor

	@javascript
	Scenario: Valid form submission
		When I visit the orator page with the right token
		And I complete the orator form and submit it
		Then I should see a flash with "Votre compte orateur a été créé. Bienvenue dans le réseau !"

	Scenario: Invalid form submission
		When I visit the orator page with the right token
		And I do not complete the form and submit it
		Then I should see errors for the fields "Prénom, Nom, Email, Mot de passe, Confirmation du mot de passe, Localité, Thèmes"

	Scenario: Can not access the page without the token
		When I visit "/resources/orators/new"
		Then I should see a flash with "Le token entré ne vous permet pas d'accéder à cette page"