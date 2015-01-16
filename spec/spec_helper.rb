require 'rake'
require 'email_spec'
require 'coveralls'

puts "Coveralls.wear!... See hooks.rb"
Coveralls.wear!

RSpec.configure do |config|

  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)

    Rails.application.load_tasks
    Rake::Task['seed:all'].invoke
    Rake::Task['test:init'].invoke
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

  config.include(EmailSpec::Helpers)
  config.include(EmailSpec::Matchers)

end
