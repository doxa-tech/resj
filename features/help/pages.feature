Feature: Pages

  So that I can find a solution
  As a visitor
  I want to go on a help page

  Background:
    Given there is a help page

  Scenario: Visit a page
    Given I am a visitor
    When I visit a help category
    And I click on a help page
    Then I should see the page's content