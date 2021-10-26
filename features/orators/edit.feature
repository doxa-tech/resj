Feature: I edit my orator profile

  Scenario: I edit my profile while I'm invisible
    Given I am an invisible orator
    When I visit the page to update the orator profile
    Then I should not see a link "Voir mon profil publique"

  Scenario: I edit my progile while I'm visible
    Given I am a visible orator
    When I visit the page to update the orator profile
    Then I should see a link "Voir mon profil publique"