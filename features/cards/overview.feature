Feature: Update a card

	So that I can change card's information
	As a card's owner
	I want to update my card in the overview page

	Scenario: Access the overview page
		Given I own a card
		And I am signed in
		When I go to the overview page of my card
		Then I should access the page

	@javascript
	Scenario: Update the card's name
		Given I own a card
		And I am signed in
		When I go to the overview page of my card
		And I change the card from "Waykup" to "Way"
		Then I should see "Way" in the input field
		And I should see "Enregistrement sauvegardé..."