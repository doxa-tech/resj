Feature: transfer a card

  So that a new user can manage the card
  As the owner
  I want to transfer my card

  @javascript @ignore
  Scenario: I transfer the card successfully
    Given I own a card
    And I am signed in as the card owner
    # located in overview_steps.rb
    When I go to the overview page of my card
    When I click the transfer button
    And I submit the form after choosing an new user
    Then I should see a flash with "Votre groupe a été transféré"
    And I should no more see the card
