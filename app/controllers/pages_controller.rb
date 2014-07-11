class PagesController < BaseController

	def home
		@page = Page.find_by_name('home')
		@cards = Card.with_card_type
		@article = Article.last
		@card_count = Card.count
		@orator_count = Orator.count
		@doc_count = Document.count
		@user_count = User.users.count
	end

	def resj
		@page = Page.find_by_name('resj')
	end

	def contact
		@page = Page.find_by_name('contact')
	end

	def resources
		@page = Page.find_by_name('resources')
		@article = Article.last
		@subjects = Subject.order("updated_at DESC").first(4)
	end

	def help
		@page = Page.find_by_name('help')
	end

	def privacy
		@page = Page.find_by_name('privacy')
	end

	def developer
		@page = Page.find_by_name('developer')
	end
	
end
