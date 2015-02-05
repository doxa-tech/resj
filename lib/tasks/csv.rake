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

		# add canton coordinates
		csv = CSV.read('public/csv/coordinates.csv','r')
		Location.all.each_with_index do |a, i| 
			a.latitude=csv[i][0]
			a.longitude=csv[i][1]
			a.save
		end

	end

end