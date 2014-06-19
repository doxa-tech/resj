require 'csv'
require 'securerandom'

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
		b = User.find_by_email("kocher.ke@gmail.com")
		CSV.open('public/csv/cards.csv','r').each do |a|
			params = {
				"name"=> a[0], 
				"description"=>a[3], 
				"card_type_id"=>CardType.first(:order => "RANDOM()").id, 
				"current_step"=>"final", 
				"parent_ids"=>[""], 
				"street"=>a[5], 
				"location_id"=>Location.first(:order => "RANDOM()").id, 
				"place"=>"", 
				"latitude"=>a[1], 
				"longitude"=>a[2], 
				"email"=>a[4], 
				"responsables_attributes"=>{"0"=>{"firstname"=>"Baptiste", "lastname"=>"Dupont", "email"=>"#{SecureRandom.hex(13)}@dup.sas", "_destroy"=>"false", "is_contact"=>"true"}}, 
				"website"=>a[8], 
				"affiliation"=>"", 
				"tag_names"=>""
			}
			card = Card.new(params)
			card.user = b
			card.save
		end
	end

	desc "Update geographic attributes of locations"
	task location_geo: :environment do
		csv = CSV.read('public/csv/coordinates.csv','r')
		Location.all.each_with_index do |a, i| 
			a.latitude=csv[i][0]
			a.longitude=csv[i][1]
			a.save
		end
	end
end