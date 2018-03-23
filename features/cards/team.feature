Feature: Team managing

  So multiple users can edit a card
  As the owner or as a authorized user
  I want to grant access to users from a card

  Scenario: Visit the team page
    Given I own a card
    And I am signed in as the card owner
    And the card has a member
    And the member is authorized to edit the card
    When I visit the team page of my card
    Then I should see a checked checkbox for the member
    And I should see an unchecked checkbox for the member

  Scenario: Add a member privilege as a card owner
    Given I own a card
    And I am signed in as the card owner
    And the card has a member
    When I visit the team page of my card
    And I check a member privilege box
    And I send the team form
    Then I should see a flash with "Les privilèges des membres ont été mis à jour"
    And I should see the member privilege box checked

  Scenario: remove a member privilege as a card owner
    Given I own a card
    And I am signed in as the card owner
    And the card has a member
    And the member is authorized to edit the card ownerships
    When I visit the team page of my card
    And I uncheck a member privilege box
    And I send the team form
    Then I should see a flash with "Les privilèges des membres ont été mis à jour"
    And I should see the member privilege box unchecked
