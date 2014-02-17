require 'csv'

namespace: :csv do
	desc "Fill cantons, city tables"
	task location: :environment do
		Canton.destroy_all
		Location.destroy_all
		CSV.open('public/csv/location.csv','r').each do |a|
			Card.create(name: a[0], latitude: a[1], longitude: a[2], description: a[3], email: a[4], street: a[5], npa: a[6], city: a[7], website: a[8], card_type: CardType.find(a[9]))
		end
	end
end