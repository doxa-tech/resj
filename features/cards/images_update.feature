@javascript @selenium @reset @help_categories
Feature: Card images update

	So that I can choose a banner and an avatar image
	As the card owner
	I want to update the images

	Background:
		Given I own a card
		And I am signed in as the card owner
		Given I visit the card show path
	
	Scenario: Successful update of the banner
		When I click on "Editer" on the banner
		And I click the label "card_banner"
		And I complete the banner upload form and submit it
		Then I should see the image "banner.jpg"

	Scenario: Invalid form submission for banner
		When I click on "Editer" on the banner
		And I click the label "card_banner"
		And I complete the banner upload form with wrong extension and submit it
		Then I should see errors

	Scenario: Successful update of the logo
		When I click on "Editer" on the logo
		And I click the label "card_avatar"
		And I complete the logo upload form and submit it
		Then I should see the image "banner.jpg"

	Scenario: Invalid form submission for logo
		When I click on "Editer" on the logo
		And I click the label "card_avatar"
		And I complete the logo upload form with wrong extension and submit it
		Then I should see errors