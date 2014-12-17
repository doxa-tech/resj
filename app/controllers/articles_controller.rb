class ArticlesController < BaseController

	def index
		@articles = Article.published.order("created_at DESC")
	end

	def show
		@article = Article.published.find(params[:id])
	end
	
end
