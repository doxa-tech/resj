# Do something before each scenario.
Before do
	self.puts "Executing rake tasks... See hooks.rb"
	execute_rake('db.rake', 'db:pages')
	execute_rake('db.rake', 'db:card_types')
  execute_rake('db.rake', 'db:admin')
	execute_rake('db.rake', 'db:newsletter')
	self.puts "Creating a location... See hooks.rb"
	Location.create!(npa: 1, official_name: 'a', post_name: 'b', latitude: 1, longitude: 2, canton: Canton.create!(name: 'c', abbreviation: 'd'))
end