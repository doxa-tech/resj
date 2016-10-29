@javascript @selenium
Feature: delete a card

  So that I can remove a card that is no more relevant
  As the owner
  I want to delete my card

  Background:
    Given I own a card
    And I am signed in as the card owner
    # located in overview_steps.rb
    When I go to the overview page of my card

  Scenario: I delete my card successfully
    When I click the delete button and confirm deleting the card
    Then I should see a flash with "Votre groupe a été supprimé"
    And I should no more see the card

  Scenario: I delete my card unsuccessfully
    When I click the delete button and mistype the name of the card
    Then I should see an error in the delete form
