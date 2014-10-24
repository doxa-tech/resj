Feature: Update a card via overview

	So that I can edit my card
	As a card owner
	I want to update my card in overview page

	@wip
	Scenario: Go to the overview page
		Given a card named "way" with owner "nkcr.je@gmail.com"
		And I am logged with email "nkcr.je@gmail.com"
		When I go to the overview page of the card "way"
		Then I should access the overview page of the card "way"

	@javascript @wip
	Scenario: Update name
		Given a card named "way" with owner "nkcr.je@gmail.com"
		And I am logged with email "nkcr.je@gmail.com"
		When I change the card named "way" to "waykup"
		Then I should see "waykup" on the overview page of "way"