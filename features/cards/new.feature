Feature: Create a new card

  So that my card is registered
  As a visitor
  I want to create a new card

  Background:
    Given I am a confirmed user
    And I am signed in

  @locations @javascript
  Scenario: I successfully complete all steps
    When I visit "/cards/wizards/new"
    And I complete the first step and submit it
		And I complete the second step and submit it
		And I complete the third step and submit it
    Then I should see the confirmation with card's information

  @javascript
  Scenario: Invalid first step submission
		When I visit "/cards/wizards/new"
		And I click the button "Prochaine étape"
		Then I should see errors for the fields "Nom, Description, Catégorie"

  @javascript
  Scenario: Invalid second step submission
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I click the button "Prochaine étape"
		Then I should see errors for the fields "Rue, Localité"

  @locations @javascript
  Scenario: Invalid third step submission
		When I visit "/cards/wizards/new"
		And I complete the first step and submit it
		And I complete the second step and submit it
    And I fill in an invalid email for the card
		And I click the button "Aller à la confirmation"
    Then I should see errors for the fields "Email"
