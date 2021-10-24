Feature: Sign in or up before creating a card

  So that I can create a card
  As a visitor
  I want to sign in or up

  Scenario: I successfully sign in
    Given I am a confirmed user
    When I visit "cards/wizards/new"
    And I sign in
    Then I should see the card wizard

  Scenario: I am not able to sign in
    Given I am a confirmed user
    When I visit "cards/wizards/new"
    And I click the button "Connexion"
    Then I should see a flash with "Nom d'utilisateur et/ou mot de passe incorrect(s)"

  Scenario: I successfully complete the sign up form
    Given I am a visitor
    When I visit "cards/wizards/new"
    And I successfully complete the signup form
    Then I should see the card wizard
    And "john@smith.com" should receive an email

  Scenario: I miscomplete the sign up form
    Given I am a visitor
    When I visit "cards/wizards/new"
    And I click the button "Créer mon compte"
    Then I should see errors for the fields "Prénom, Nom de famille, Mot de passe"

  Scenario: I visit the order page without being signed in
    Given I am a visitor
    When I visit "cards/wizards/new"
    Then I should see the sign in and up page