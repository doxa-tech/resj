namespace :travis do 

	desc "Set up rspec & cucumber for travis"
	task travis: :environment do
		`bin/rake db:migrate RAILS_ENV=test`
		`rake sunspot:solr:start RAILS_ENV=test`
		`rake sunspot:solr:reindex RAILS_ENV=test`
	  ["rspec spec", "rake jasmine:ci", "rake cucumber"].each do |cmd|
	    puts "Starting to run #{cmd}..."
	    system("export DISPLAY=:99.0 && bundle exec #{cmd}")
	    raise "#{cmd} failed!" unless $?.exitstatus == 0
	  end
	end

end