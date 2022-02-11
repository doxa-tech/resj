Feature: contact an orator

  So that I can invite an orator
  As a visitor
  I want to send a message

  Scenario: I successfully send a message
    Given there is a visible orator
    When I visit the orator's page
    And I complete the contact form
    Then I should see a flash with "Ton message a été envoyé. Tu as reçu une confirmation à l'email indiqué."
    And the orator should receive an email

  Scenario: I send a message with a wrong verification
    Given there is a visible orator
    When I visit the orator's page
    And I complete the contact form with a wrong verification
    Then I should see a flash with "Des champs sont invalides"
