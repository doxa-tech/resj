Feature: Password forgotten

  So I can login
  As I user
  I want to reset my password

  Scenario: Successful request
    Given I am a confirmed user
    When I visit "/password_resets/new"
    And I submit the form with my email
    Then I should receive an email
    Then I should see a flash with "Un email contenant les instructions pour changer votre mot de passe vous a été envoyé."

  Scenario: Successful password reset
    Given I am a confirmed user
    And I requested a reset
    When I visit the page to reset
    And I submit the form with my new password
    Then I should see a flash with "Votre mot de passe a été changé avec succès. Vous pouvez dès à présent l'utiliser pour vous connecter!"
    And I should be able to login with my new password

  Scenario: Expired password reset
    Given I am a confirmed user
    And I requested a reset three hours ago
    When I visit the page to reset
    And I submit the form with my new password
    Then I should see a flash with "La demande pour un nouveau mot de passe a expiré."