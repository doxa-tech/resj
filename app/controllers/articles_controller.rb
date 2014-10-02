class ArticlesController < ApplicationController
	before_action :authorize_resource

	def index
		@articles = Article.order("created_at DESC")
	end

	def show
		@article = Article.find(params[:id])
	end
	
end
