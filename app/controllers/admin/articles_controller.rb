class Admin::ArticlesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @article }

	def index
		@table = ArticleTable.new(self)
		@table.respond
	end

	def new
		js 'form'
		@article = current_user.articles.new
	end

	def create 
		js 'form'
		@article = current_user.articles.new(article_params)
		if @article.save
			redirect_to admin_articles_path, success: t('article.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
		js 'form'
	end

	def update
		js 'form'
		if @article.update_attributes(article_params)
			redirect_to admin_articles_path, success: t('article.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@article.destroy
		redirect_to admin_articles_path, success: t('article.admin.destroy.success')
	end

	private

	def article_params
		params.require(:article).permit(:title, :content, :image, :published_at, { :theme_ids =>[] })
	end

	def current_resource
		@article = Article.find_by_id(params[:id])
	end
end