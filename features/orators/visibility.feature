Feature: switch orator's visibility

  So that I disappear from the orators registry
  As an orator
  I want to switch my visibility

  Scenario: I switch from visible to invisible
    Given I am a visible orator
    And I am signed in
    And I visit "/profile"
    When I click the link "Se rendre invisible"
    Then I should see a flash with "Ta visibilité a été changée"
    And I should see "Vous n'êtes pas visible"

  Scenario: I switch from invisible to visible
    Given I am an invisible orator
    And I am signed in
    And I visit "/profile"
    When I click the link "Devenir visible"
    Then I should see a flash with "Ta visibilité a été changée"
    And I should see "Vous êtes visible"