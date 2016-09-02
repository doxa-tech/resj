namespace :demo do

  desc "Setup data for testing"
  task :all => [:validator, :location, :theme, :newsletter, :user_types]

	desc "Add a admin to notify when a card is created"
	task validator: :environment do
    user = FactoryGirl.create(:user, firstname: "Fred", lastname: "Vegas")
		Ownership.find_or_add_by(element: 'admin/card_statuses', user: user, type: 'all_entries', right_update: true)
	end

  desc "Add an location"
  task location: :environment do
    canton = Canton.find_or_create_by(name: "Fribourg", abbreviation: "FR")
    Location.find_or_create_by(npa: 1630, post_name: "Bulle", official_name: "Bulle", latitude: 46, longitude: 7, canton: canton)
  end

  desc "Add a theme"
  task theme: :environment do
    Theme.find_or_create_by(name: "L'argent")
  end

  desc "A a newsletter type"
  task newsletter: :environment do
    Newsletter.find_or_create_by(name: "News")
  end

  desc "Add the user's types"
  task user_types: :environment do
    UserType.find_or_create_by(name: 'group')
    UserType.find_or_create_by(name: 'user')
  end

end
