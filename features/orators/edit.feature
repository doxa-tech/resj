Feature: I edit my orator profile

  So that I can update my information
  As an orator
  I want to edit my profile

  Scenario: I successfully edit my profile
    Given I am a visible orator
    And I am signed in
    When I visit the page to update my orator profile
    And I update my description with "Un super orateur"
    Then I should see a flash with "Vos informations ont été mises à jour"
    And I should see "Un super orateur"

  Scenario: I edit my profile with an error
    Given I am a visible orator
    And I am signed in
    When I visit the page to update my orator profile
    And I update my description with ""
    Then I should see errors for the fields "Description"

  Scenario: I edit my profile while I'm invisible
    Given I am an invisible orator
    And I am signed in
    When I visit the page to update my orator profile
    Then I should not see "Voir mon profil publique"

  Scenario: I edit my profile while I'm visible
    Given I am a visible orator
    And I am signed in
    When I visit the page to update my orator profile
    Then I should see "Voir mon profil publique"