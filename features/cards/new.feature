@javascript @location @card_types
Feature: Create a new card

	So that I register my group on the website
	As a vistor
	I want to create a new group

	Background:
		Given I am a visitor

	@validator @ownerships @statuses
	Scenario: Valid form submission
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I complete the second step and submit it
		And I complete the third step and submit it
		And I complete the fourth step and submit it
		And I submit the card new form
		Then I should see a flash with "Vous êtes entré dans le réseau avec succès !"

	Scenario: Invalid first step submission
		When I visit "/cards/wizards/new"
		And I click to go to the location step
		Then I should see errors for the fields "Nom, Description, Catégorie"

	Scenario: Invalid second step submission
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I click to go to the team step
		Then I should see errors for the fields "Rue, Localité"

	Scenario: Invalid third step submission
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I complete the second step and submit it
		And I click to go to the extra step
		Then I should see errors for the fields "Responsables"

	Scenario: Invalid fourth step submission
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I complete the second step and submit it
		And I complete the third step and submit it
		And I click to go to the final step
		Then I should see the final step

	Scenario: Invalid form submission
		When I visit "/cards/wizards/new"
		And I complete the first step
		And I click the button "aller à la fin"
		And I submit the card new form
		Then I should see errors for the fields "Rue, Localité, Responsables"

	Scenario: See a summary in the final step
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I complete the second step and submit it
		And I complete the third step and submit it
		And I complete the fourth step and submit it
		Then I should see a summary of my card

	Scenario: Edit a field after beeing in the final step
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I complete the second step and submit it
		And I complete the third step and submit it
		And I complete the fourth step and submit it
		When I go back to the first step, edit the name and go to the final step
		Then I should see the updated attribute

