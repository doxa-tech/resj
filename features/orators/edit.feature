Feature: I edit my orator profile

  Scenario: I edit my profile while I'm invisible
    Given I am an invisible orator
    And I am signed in
    When I visit the page to update my orator profile
    Then I should not see "Voir mon profil publique"

  Scenario: I edit my progile while I'm visible
    Given I am a visible orator
    And I am signed in
    When I visit the page to update my orator profile
    Then I should see "Voir mon profil publique"