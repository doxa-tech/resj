tasks = Rake.application.instance_variable_get '@tasks'
tasks.delete 'tire:import:all'

namespace :tire do
  namespace :import do 
    task all: :environment do

      params = eval(ENV['PARAMS'].to_s) || {}
      Rails.application.eager_load!
      ActiveRecord::Base.descendants.each do |klass|

        # Skip if the class doesn't have Tire integration
        next unless klass.respond_to?(:tire)

        total  = klass.count rescue nil

        Tire::Tasks::Import.add_pagination_to_klass(klass)
        Tire::Tasks::Import.progress_bar(klass, total) if total

        index = klass.tire.index
        Tire::Tasks::Import.delete_index(index) if ENV['FORCE']
        Tire::Tasks::Import.create_index(index, klass)

        Tire::Tasks::Import.import_model(index, klass, params)
      end

      puts '[Import] Done.'
    end
  end
end