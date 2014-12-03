Feature: Orators

	So I can appear as an orator
	As a visitor
	I want to create an orator account

	Background:
		Given I am a visitor

	@javascript
	Scenario: Valid form submission as a visitor
		When I visit the orator page with the right token
		And I complete the orator form and submit it
		Then I should see a flash with "Votre compte orateur a été créé. Bienvenue dans le réseau !"

	Scenario: Invalid form submission as a visitor
		When I visit the orator page with the right token
		And I do not complete the form and submit it
		Then I should see errors for the fields "Prénom, Nom, Email, Mot de passe, Confirmation du mot de passe, Localité, Thèmes"

	Scenario: Can not access the page without the token
		When I visit "/resources/orators/new"
		Then I should see a flash with "Le token entré ne vous permet pas d'accéder à cette page"

	Scenario: Can not access the page if I am an orator
		Given I am a orator
		And I am signed in
		When I visit the orator page with the right token
		Then I should see a flash with "Vous êtes déjà un orateur."

	Scenario: Visit the page to become an orator as a user
		Given I am a confirmed user
		And I am signed in
		When I visit the orator page with the right token
		Then I should see my information in the fields

	@javascript
	Scenario: Valid form submission as an user
		Given I am a confirmed user
		And I am signed in
		When I visit the orator page with the right token
		And I complete the current password field
		And I complete the orator fields
		And I click the button "Mettre à jour"
		Then I should see a flash with "Votre profil d'orateur a été mis à jour !"