Feature: User affiliations

	So I can add a user to my card
	As a card owner
	I want to make a request to the user or I want to accept a request form a user

	Background:
		Given I own a card
		And I am signed in as the card owner
		And there is a confirmed user

	@javascript
	Scenario: Make request to an user
		Given I go to the team page of my card
		When I select the user and send the request
		Then I should see a flash with "Votre requête a été envoyée à l'utilisateur"
		And I should see "John Smith" in the pending list

	@javascript
	Scenario: Make request to an user that has refused recently
		Given I recently made an user refused request 
		And I go to the team page of my card
		When I select the user and send the request
		Then I should see a flash with "La demande n'a pas pu être acceptée"
		And I should not see "John Smith" in the pending list

	@javascript
	Scenario: Make request to an user I refused
		Given I refused an user
		And I go to the team page of my card
		When I select the user and send the request
		Then I should see a flash with "Votre requête a été envoyée à l'utilisateur"
		And I should see "John Smith" in the confirmed list

	@javascript
	Scenario: Accept an user request
		Given a user sent a request to my card
		And I go to the team page of my card
		When I click the link "Confirmer"
		Then I should see a flash with "Décision enregistrée"
		And I should see "John Smith" in the confirmed list

	@javascript
	Scenario: Refuse an user request
		Given a user sent a request to my card
		And I go to the team page of my card
		When I click the link "Refuser"
		Then I should see a flash with "Décision enregistrée"
		And I should not see "John Smith" in the confirmed list

	Scenario: Delete a user
		Given the card has a member
		And I go to the team page of my card
		When I click the link "Retirer"
		Then I should see a flash with "Utilisateur retiré"
		And I should not see "John Smith" in the confirmed list
	