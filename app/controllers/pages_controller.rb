class PagesController < BaseController

	def home
		@page = Page.find_by_name('home')
		@cards = Card.all
		@article = Article.last
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
		@subjects = Subject.last(4).reverse
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
