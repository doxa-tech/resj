Feature: edit an account

  So that I can update my information
  As a user
  I want to edit my profile

  Background:
    Given I am a confirmed user
    And I am signed in
    And I visit "profile/edit"

  Scenario: I successfully update my profile
    Given I update my firstname with "Tommy"
    Then I should see a flash with "Tes informations ont été mises à jour"
    Then I should see "Tommy"

  Scenario: I update my profile with an error
    When I update my firstname with ""
    Then I should see errors for the fields "Prénom"

  Scenario: I update my profile with a wrong password
    Given I update my firstname without a correct password
    Then I should see errors for the fields "Mot de passe actuel"