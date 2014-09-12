# Do something before each scenario.
Before do
	self.puts "Executing rake tasks"
  execute_rake('db.rake', 'db:admin')
	execute_rake('db.rake', 'db:newsletter')
end