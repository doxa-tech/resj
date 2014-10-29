Feature: Card images update

	So that I can choose a banner and an avatar image
	As the card owner
	I want to update the images

	Background:
		Given I own a card
		And I am signed in as the card owner

	@javascript @wip
	Scenario: Successful update of the banner
		Given I visit the card show path
		When I click on "Editer" on the banner
		And I click the button "Changer l'image"
		And I complete the upload form and submit it
		Then I should see the updated banner

	@javascript @wip
	Scenario: Invalid form submission cause ...