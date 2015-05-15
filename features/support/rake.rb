module RakeTasks
	def execute_rake(file, task)
	  require 'rake'
	  rake = Rake::Application.new
	  Rake.application = rake
	  Rake::Task.define_task(:environment)
	  load "#{Rails.root}/lib/tasks/#{file}"
	  rake[task].invoke
	end
end

World(RakeTasks)

%w(pages card_types statuses ownerships superuser help_categories notifications).each do |task|

  Before("@#{task}") do
    execute_rake("seed.rake", "seed:#{task}")
  end

end

%w(validator location theme newsletter user_types).each do |task|

  Before("@#{task}") do
    execute_rake("demo.rake", "demo:#{task}")
  end

end