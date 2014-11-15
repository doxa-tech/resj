Feature: Card images update

	So that I can choose a banner and an avatar image
	As the card owner
	I want to update the images

	Background:
		Given I own a card
		And I am signed in as the card owner

	@javascript @nkcrf
	Scenario: Successful update of the banner
		Given I visit the card show path
		When I click on "Editer" on the banner
		And I click the label "card_banner"
		And I complete the upload form and submit it
		Then I should see the image "banner.jpg"

	@javascript @nkcr
	Scenario: Invalid form submission cause
		Given I visit the card show path
		When I click on "Editer" on the banner
		And I click the label "card_banner"
		And I complete the upload form with wrong extension and submit it
		Then I should see errors