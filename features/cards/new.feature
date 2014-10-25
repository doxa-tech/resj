Feature: Create a new card

	So that I register my group on the website
	As a vistor
	I want to create a new group

	@javascript
	Scenario: Successful form submission
		Given I am a visitor
		When I visit "/cards/new"
		And I complete all the steps and submit the card new form
		Then I should see a flash with "Vous êtes entré dans le réseau avec succès !"

	@javascript
	Scenario: Invalid first step submission
		Given I am a visitor
		When I visit "/cards/new"
		And I do not complete the form and I submit it
		Then I should see errors for the fields "Nom, Description, Catégorie"