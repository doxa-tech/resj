require 'csv'

namespace :csv do
	desc "Fill cantons, city tables"
	task location: :environment do
		Canton.destroy_all
		Location.destroy_all

		# abbreviation ; name
		CSV.open('public/csv/cantons.csv','r:ISO-8859-1').each do |a|
			Canton.create(abbreviation: a[0], name: a[1])
		end
		# Canton abbreviation ; Official Location ; NPA ; Post Location
		CSV.open('public/csv/locations.csv','r:ISO-8859-1').each do |a|
			canton = Canton.where(abbreviation: a[0]).first
			Location.create(
				canton: canton,
				official_name: a[1],
				post_name: a[3],
				npa: a[2].to_i
			)
		end
	end

	desc "Load some example cards"
	task card: :environment do
		resp = Responsable.create(firstname: "Noémien", lastname: "Kocher", email: "nkcr.je@gmail.com")
		CSV.open('public/csv/cards.csv','r').each do |a|
			Card.create(
				name: a[0], 
				latitude: a[1], 
				longitude: a[2], 
				description: a[3], 
				email: a[4], 
				street: a[5], 
				location: Location.first(:order => "RANDOM()"), 
				website: a[8], 
				responsable: resp,
				card_type: CardType.first(:order => "RANDOM()")
			)
		end
	end
end