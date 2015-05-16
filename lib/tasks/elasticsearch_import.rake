tasks = Rake.application.instance_variable_get '@tasks'
tasks.delete 'elasticsearch:import:all'

namespace :elasticsearch do
  namespace :import do 
    task all: :environment do

      puts "[IMPORT] Loading models"
      Rails.application.eager_load!
      ActiveRecord::Base.descendants.each do |klass|

        # Skip if the class doesn't have Elasticsearch integration
        next unless klass.respond_to?(:__elasticsearch__)

        puts "[IMPORT] Processing model: #{klass}..."

        ENV['CLASS'] = klass.to_s
        Rake::Task["elasticsearch:import:model"].invoke
        Rake::Task["elasticsearch:import:model"].reenable
        puts
      end
    end
  end
end