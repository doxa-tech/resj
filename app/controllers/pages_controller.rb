class PagesController < ApplicationController

	def home
		@page = Page.find_by_name('home')
		@cards = Card.all
	end

	def about
		@page = Page.find_by_name('about')
	end
	
end
