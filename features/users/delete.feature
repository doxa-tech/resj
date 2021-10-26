Feature: delete an account

  So that I can leave the platform
  As an user
  I want to delete my account

  @javascript
  Scenario: I successfully delete my account
    Given I am a confirmed user
    And I am signed in
    When I visit "/profile"
    When I click the button "Supprimer mon compte"
    And I click the button "Confirmer"
    Then I should see a flash with "Ton compte a été supprimé"