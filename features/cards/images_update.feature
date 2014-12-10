Feature: Card images update

	So that I can choose a banner and an avatar image
	As the card owner
	I want to update the images
	

	@selenium @reset @nkcr
	Scenario: Successful update of the banner
		Given I own a card
		And I am signed in as the card owner
		Given I visit the card show path
		When I click on "Editer" on the banner
		And I click the label "card_banner"
		And I complete the banner upload form and submit it
		Then I should see the image "banner.jpg"

	@selenium @reset @nkcr
	Scenario: Invalid form submission for banner
		Given I own a card
		And I am signed in as the card owner
		Given I visit the card show path
		When I click on "Editer" on the banner
		And I click the label "card_banner"
		And I complete the banner upload form with wrong extension and submit it
		Then I should see errors

	@selenium @reset @nkcr
	Scenario: Successful update of the logo
		Given I own a card
		And I am signed in as the card owner
		Given I visit the card show path
		When I click on "Editer" on the logo
		And I click the label "card_avatar"
		And I complete the logo upload form and submit it
		Then I should see the image "banner.jpg"

	@selenium @reset @nkcr
	Scenario: Invalid form submission for logo
		Given I own a card
		And I am signed in as the card owner
		Given I visit the card show path
		When I click on "Editer" on the logo
		And I click the label "card_avatar"
		And I complete the logo upload form with wrong extension and submit it
		Then I should see errors