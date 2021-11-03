Feature: Transfer a card to another user

  So that the card belongs to the right user
  As the owner of card
  I want to transfer the ownership to another user

  Background:
    Given I am a confirmed user
    And I am signed in
    And I have a complete card

  @javascript
  Scenario: I successfully transfer the card
    When I visit the card's update page
    And I click the button "Transférer le groupe"
    When I enter the email of another user
    And I click the button "Confirmer"
    Then I should see a flash with "Ton groupe a été transféré à l'utilisateur demandé"
    And "john@smith.com" should receive an email
    And "another@bar.com" should receive an email

  @javascript
  Scenario: I transfer the card an user that does not exist
    When I visit the card's update page
    And I click the button "Transférer le groupe"
    When I enter the email that does not exist
    And I click the button "Confirmer"
    Then I should see a flash with "Aucun utilisateur avec cette email n'a été trouvé"
     