@javascript @selenium @wip
Feature: transfer a card

  So that a new user can manage the card
  As the owner
  I want to transfer my card

  Background:
    Given I own a card
    And I am signed in as the card owner
    # located in overview_steps.rb
    When I go to the overview page of my card
    When I click the transfer button

  Scenario: I transfer the card successfully
    When I choose an user to receive the card
    And I confirm transfering the card
    Then I should see a flash with "Votre groupe a été transféré"
    And I should no more see the card

  Scenario: I mistype the name of the group
    When I choose an user to receive the card
    And I mistype the name of the card
    Then I should see the error "Le champs "Nom" ne correspond pas" in the transfer form

  Scenario: I transfer to myself
    When I choose myself to receive the card
    And I confirm transfering the card
    Then I should see the error "Le champs "Utilisateur" n'est pas valide" in the transfer form
