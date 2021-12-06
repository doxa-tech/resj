Feature: delete an orator

  So that I definitely do not appear as an orator
  As an orator
  I want to delete my profile

  @javascript
  Scenario: I successfully delete my profile
    Given I am a confirmed orator
    And I am signed in
    When I visit "/profile"
    When I click the button "Supprimer mon profil orateur"
    And I click the button "Confirmer"
    Then I should see a flash with "Votre compte orateur a été supprimé"
    And I should not see "Paramètres d'orateur"