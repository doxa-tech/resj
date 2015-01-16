# Do something before each scenario.
require 'coveralls'

Before do
  self.puts "Coveralls.wear!... See hooks.rb"
  Coveralls.wear!
  self.puts "Executing rake tasks... See hooks.rb"
  execute_rake('seed.rake', 'seed:all')
  execute_rake('test.rake', 'test:init')

  create_index
end

Around do |scenario, block|
  DatabaseCleaner.cleaning(&block)
end

After('@reset') do 
  Capybara.current_session.driver.quit
end