class Admin::TagsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

	def index
		@table = Table.new(view_context, Tag)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new 
		@tag = Tag.new
	end

	def create 
		@tag = Tag.new(tag_params)
		if @tag.save
			redirect_to admin_tags_path, success: t('tag.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
		@tag = Tag.find(params[:id])
	end

	def update
		@tag = Tag.find(params[:id])
		if @tag.update_attributes(tag_params)
			redirect_to admin_tags_path, success: t('tag.admin.create.success')
		else
			render 'edit'
		end
	end

	def destroy
		Tag.find(params[:id]).destroy
		redirect_to admin_tags_path, success: t('tag.admin.create.success')
	end

	private

	def tag_params
		params.require(:tag).permit(:name)
	end

	def current_resource
		@tag = Tag.find(params[:id])
	end
end
