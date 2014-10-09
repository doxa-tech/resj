class Admin::ArticlesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @article }

	def index
		@table = ArticleTable.new(view_context)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new 
		@article = current_user.articles.new
	end

	def create 
		@article = current_user.articles.new(article_params)
		if @article.save
			redirect_to admin_articles_path, success: t('article.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
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
		params.require(:article).permit(:title, :content, :image, { :theme_ids =>[] })
	end

	def current_resource
		@article = Article.find_by_id(params[:id])
	end
end
