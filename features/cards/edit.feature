Feature: Update a card

  So that the card's information are update
  As the owner
  I want to update the card

  Background:
    Given I am a confirmed user
    And I am signed in
    And I have a complete card

  Scenario: I successfully update the card
    When I visit the card's update page
    And I update the card's name with "Spacestation"
    Then I should see "Spacestation"
    And I should not see "Merci d'avoir confirmé ton groupe"

  Scenario: I update the card with an error
    When I visit the card's update page
    When I update the card's name with ""
    Then I should see errors for the fields "Nom du groupe"
  