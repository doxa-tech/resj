Feature: Sign in

  So that I can use user-only features
  As a visitor
  I want to sign in

  Scenario: I successfully sign in
    Given I am a confirmed user
    When I visit "signin"
    And I sign in
    Then I should see a flash with "Connexion réussie"

  Scenario: I am not able to sign in
    Given I am a confirmed user
    When I visit "signin"
    And I click the button "Connexion"
    Then I should see a flash with "Nom d'utilisateur et/ou mot de passe incorrect(s)"