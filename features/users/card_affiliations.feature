Feature: Card affiliations

	So I can become a member of a card
	As a user
	I want to make a request to the card or I want to accept a request form a card

	Background:
		Given I am a confirmed user
		And I am signed in
		And there is an active card

	@javascript
	Scenario: Make request to card
		When I visit "/user/my_cards"
		And I select the card and send the request
		Then I should see a flash with "Votre requête a été envoyée au groupe !"
		And I should see "Waykup" in the pending list

	@javascript
	Scenario: Make request to a card that has refused me recently
		Given I recently made a card refused request 
		When I visit "/user/my_cards"
		And I select the card and send the request
		Then I should see a flash with "La demande n'a pas pu être acceptée"
		And I should not see "Waykup" in the pending list

	@javascript
	Scenario: Accept a card request
		Given a card sent me a request
		When I visit "/user/my_cards"
		And I click the link "Confirmer"
		Then I should see a flash with "Décision enregistrée"
		And I should see "Waykup" in the confirmed list

	@javascript
	Scenario: Refuse a card request
		Given a card sent me a request
		When I visit "/user/my_cards"
		And I click the link "Refuser"
		Then I should see a flash with "Décision enregistrée"
		And I should not see "Waykup" in the confirmed list

	Scenario: Quit a card
		Given I am member of a card
		When I visit "/user/my_cards"
		And I click the link "Quitter"
		Then I should see a flash with "Groupe quitté"
		And I should not see "Waykup" in the confirmed list