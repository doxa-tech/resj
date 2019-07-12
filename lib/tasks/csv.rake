require 'csv'
require 'securerandom'

namespace :csv do
	desc "Add the cantons and cities to the database"
	task locations: :environment do
		Canton.destroy_all
		Location.destroy_all

		# abbreviation ; name
		CSV.open('public/csv/cantons.csv','r:ISO-8859-1').each do |line|
			Canton.create!(abbreviation: line[0], name: line[1])
		end

		# canton abbreviation ; Official Location ; NPA ; Post Location
		CSV.open('public/csv/locations.csv','r:ISO-8859-1').each do |line|
			canton = Canton.find_by!(abbreviation: line[0])
			Location.create!(
				canton: canton,
				official_name: line[1],
				post_name: line[3],
				zip: line[2].to_i
			)
		end

		# add canton coordinates
		csv = CSV.read('public/csv/coordinates.csv','r')
		Location.all.each_with_index do |l, i| 
			l.latitude = csv[i][0]
			l.longitude = csv[i][1]
			l.save!
		end

	end

end