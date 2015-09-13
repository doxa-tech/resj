class PagesController < BaseController

	def home
		js true
		@page = Page.find_by_name('home')
		@article = Article.published.last(10).sample
		@card_count = Card.active.count
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
		js true
		@page = Page.find_by_name('resources')
		@article = Article.published.last
		@subjects = Subject.order("updated_at DESC").first(4)
	end

	def soutien
		@page = Page.find_by_name('help')
	end

	def privacy
		@page = Page.find_by_name('privacy')
	end

	def developer
		@page = Page.find_by_name('developer')
	end
	
end
