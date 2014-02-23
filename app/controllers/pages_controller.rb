class PagesController < ApplicationController

	def home
		@page = Page.find_by_name('home')
		@cards = Card.all
	end

	def resj
		@page = Page.find_by_name('resj')
	end

	def contact
		@page = Page.find_by_name('contact')
	end
	
end
