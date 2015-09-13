class ArticlesController < BaseController

	def index
    js true
		@articles = Article.published.order("created_at DESC")
	end

	def show
		@article = Article.published.find(params[:id])
	end
	
end
