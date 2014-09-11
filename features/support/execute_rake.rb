module ExecuteRake
	def execute_rake(file, task)
	  require 'rake'
	  rake = Rake::Application.new
	  Rake.application = rake
	  Rake::Task.define_task(:environment)
	  load "#{Rails.root}/lib/tasks/#{file}"
	  rake[task].invoke
	end
end

# nkcr
World(ExecuteRake)