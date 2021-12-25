Feature: Confirm the validity of a card

  So that my card is not disabled
  as the owner
  I want to update the card

  Background:
    Given I am a confirmed user
    And I am signed in

  Scenario: The card is up-to-date
    Given I have a complete card
    When I visit the card's update page
    Then I should not see "Merci de vérifier"

  Scenario: The owner received a request to confirm the card
    Given I have a card that must be confirmed
    When I visit the card's update page
    Then I should see "Merci de vérifier"

  Scenario: I update an card after a request
    Given I have a card that must be confirmed
    When I visit the card's update page
    And I click the button "Sauvegarder et mettre à jour"
    Then I should see "Merci d'avoir confirmé ton groupe"
