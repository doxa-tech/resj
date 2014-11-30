class ArticlesController < BaseController

	def index
		@articles = Article.includes(:user).order("created_at DESC")
	end

	def show
		@article = Article.find(params[:id])
	end
	
end
