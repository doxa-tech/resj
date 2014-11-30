Feature: Categories

  So that I can find the suitable help
  As a visitor
  I want to see a list of categories

  @wip
  Scenario: Visit main help page
    Given I am a visitor
    When I visit "/help"
    Then I should see links to the categories