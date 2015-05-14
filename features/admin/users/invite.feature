Feature: Invite an orator to subscribe

  So that a orator subscribe
  As an authorized user
  I want to invite an user or an email

  @wip @javascript
  Scenario: I invite a email and a user
    Given I am authorized to invite orators
    And I am signed in
    When I visit "/admin/users/invitation"
    And I complete the invitation form
    Then I should see a flash with "Invitations envoyées"