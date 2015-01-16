# Do something before each scenario.

Before do
  self.puts "Executing rake tasks... See hooks.rb"
  execute_rake('seed.rake', 'seed:all')
  execute_rake('test.rake', 'test:init')
end

Around do |scenario, block|
  DatabaseCleaner.cleaning(&block)
end

After('@reset') do 
  Capybara.current_session.driver.quit
end