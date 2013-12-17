namespace :db do 
	desc "Create the pages"
	task pages: :environment do
		Page.destroy_all
		
		Page.create(name: 'home', content: 'content')
	end
end