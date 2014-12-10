namespace :travis do 

	desc "Set up rspec & cucumber for travis"
	task travis: :environment do
		`bin/rake db:migrate RAILS_ENV=test`

		`curl -sSL https://raw.githubusercontent.com/moliware/travis-solr/master/travis-solr.sh | SOLR_VERSION=4.6.1 bash`
	  ["rspec spec", "rake jasmine:ci", "rake cucumber"].each do |cmd|
	    puts "Starting to run #{cmd}..."
	    system("export DISPLAY=:99.0 && bundle exec #{cmd}")
	    raise "#{cmd} failed!" unless $?.exitstatus == 0
	  end
	end

end