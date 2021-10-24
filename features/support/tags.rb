Before("@locations") do
  canton = Canton.create!(abbreviation: "FR", name: "Fribourg")
  Location.create!(canton: canton, zip: 1630, official_name: "Bulle", post_name: "Bulle", latitude: 46.6227614, longitude: 7.0505594)
  Location.create!(canton: canton, zip: 1627, official_name: "Vaulruz", post_name: "Vaulruz", latitude: 46.6222099, longitude: 6.9899549)
end

Before("@themes") do
  Theme.create!(name: "Identité")
  Theme.create!(name: "Evangélisation")
end