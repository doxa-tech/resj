Feature: Create a new card

  So that my card is registered
  As a visitor
  I want to create a new card

  @locations @tags @javascript
  Scenario: I successfully complete all steps
    When I visit "/cards/wizards/new"
    And I complete the first step and submit it
		And I complete the second step and submit it
		And I complete the third step and submit it
    When I confirm and submit my card
    Then I should see a flash with "Vous êtes entré dans le réseau avec succès !"