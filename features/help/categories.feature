Feature: Categories

  So that I can find the suitable help
  As a visitor
  I want to see a list of categories

  Background:
    Given there are many help pages

  Scenario: Visit main help page
    Given I am a visitor
    When I visit "/help"
    Then I should see links to the categories

  @wip
  Scenario: Click on a category
    Given I am a visitor
    When I visit "/help"
    And I click the link "Images des groupes"
    Then I should see to help pages