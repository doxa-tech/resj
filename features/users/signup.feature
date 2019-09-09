Feature: create an account

  So that I have an account
  As a visitor
  I want to create an account

  Scenario: I successfully create an account
    Given I am a visitor
    When I visit "signup"
    And I successfully complete the signup form
    Then I should see "Ton compte Reseau Jeunesse a été créé !"
    # And "john@smith.com" should receive an email # TODO

  Scenario: I miscomplete the sign up form
    Given I am a visitor
    When I visit "signup"
    And I click the button "Créer mon compte"
    Then I should see errors for the fields "Prénom, Nom de famille, Mot de passe"
