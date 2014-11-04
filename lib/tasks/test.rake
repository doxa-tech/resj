namespace :test do 

	desc "Init a environment for testing"
	task init: :environment do
		
		canton = Canton.find_or_create_by(name: "Fribourg", abbreviation: "FR")
		Location.find_or_create_by(npa: 1630, post_name: "Bulle", official_name: "Bulle", latitude: 46, longitude: 7, canton: canton)
		Theme.find_or_create_by(name: "L'argent")
		Newsletter.find_or_create_by(name: "News")

		Ownership.find_or_create_by(element: Element.find_by_name('admin/card_statuses'), user: User.find_by_email('kocher.ke@gmail.com'), ownership_type: OwnershipType.find_by_name('all_entries'), right_update: true)
	end
end