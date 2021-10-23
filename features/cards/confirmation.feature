Feature: Confirm the card

  So that the card is sent to be accepted
  As an user creating a card
  I want to confirm my card

  Background:
    Given I am a confirmed user
    And I am signed in

  Scenario: I successfully confirm the card
    Given I have a complete card
    When I visit the card confirmation page
    And I click the link "Confirmer"
    Then I should see a flash with "Vous êtes entré dans le réseau avec succès ! Votre groupe n'apparaît pas directement sur la carte car il doit d'abord être validé."
    And "john@smith.com" should receive an email

  Scenario: I try to confirm an incomplete card
    When I visit "/cards/wizards/new" 
    And I visit the card confirmation page
    And I click the link "Confirmer"
    Then I should see errors for the fields "Nom"