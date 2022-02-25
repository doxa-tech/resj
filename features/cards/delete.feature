Feature: Delete a card

  So that my card disappear
  As the owner
  I want to delete the card

  Background:
    Given I am a confirmed user
    And I am signed in
    And I have a complete card

  @javascript
  Scenario: I successfully delete my card
    When I visit the card's update page
    When I click the button "Supprimer le groupe"
    And I fill in the card's name
    And I click the button "Confirmer"
    Then I should see a flash with "Ton groupe a été supprimé"
    And I should not see the group anymore

  @javascript
  Scenario: I don't write the correct group's name
    When I visit the card's update page
    When I click the button "Supprimer le groupe"
    And I click the button "Confirmer"
    Then I should see a flash with "Le nom du groupe n'est pas correct"