require 'rake'
require 'email_spec'

RSpec.configure do |config|

  config.before(:all) do
    Rails.application.load_tasks
    Rake::Task['seed:all'].invoke
    Rake::Task['test:init'].invoke
  end

  config.include(EmailSpec::Helpers)
  config.include(EmailSpec::Matchers)

end
