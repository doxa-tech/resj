Feature: Newsletter
	
	@newsletter
	Scenario: Successfull update of the newsletter's options
		Given I am a confirmed user
		And I am signed in
		When I visit "/user/notifications"
		And I unchecked a newsletter and submit the form
		Then I should see a flash with "Vos préférences d'envoi des newsletters ont été mises à jour"
		And I should see the unckecked newsletter

	Scenario: Not signed in
		Given I am a visitor
		When I visit "/user/notifications"
		Then I should see a flash with "Vous devez vous connecter pour continuer"
