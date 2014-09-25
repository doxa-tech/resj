# Do something before each scenario.
Before do
	self.puts "Executing rake tasks... See hooks.rb"
	execute_rake('test.rake', 'test:init')
end