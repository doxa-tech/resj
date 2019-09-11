Feature: I sign up to become an orator

  So that I can be found in the orators list
  As an user or a visitor
  I want to sign up

  @javascript @locations @themes
  Scenario: I successfully sign up as an user
    Given I am a confirmed user
    And I am signed in
    When I visit "orators/new"
    And I successfully complete the orator form
    Then I should see a flash with "Bienvenue dans le réseau des orateurs"
    # And "john@smith.com" should receive an email # TODO

  Scenario: I miscomplete the form to sign up as an user
    Given I am a confirmed user
    And I am signed in
    When I visit "orators/new"
    And I click the button "Envoyer"
    Then I should see errors for the fields "Description, Localité"

  @javascript @locations @themes
  Scenario: I successfully sign up as a visitor
    Given I am a visitor
    When I visit "orators/new"
    And I successfully complete the orator form for a visitor
    Then I should see a flash with "Bienvenue dans le réseau des orateurs"
    # And "john@smith.com" should receive 2 emails # TODO

  Scenario: I miscomplete the form to sign up as a visitor
    Given I am a visitor
    When I visit "orators/new"
    And I click the button "Envoyer"
    Then I should see errors for the fields "Nom, Prénom, Email, Mot de passe, Description, Localité"