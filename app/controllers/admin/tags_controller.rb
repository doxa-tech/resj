class Admin::TagsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @tag }

	def index
		@table = Table.new(self, Tag)
		@table.respond
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
	end

	def update
		if @tag.update_attributes(tag_params)
			redirect_to admin_tags_path, success: t('tag.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@tag.destroy
		redirect_to admin_tags_path, success: t('tag.admin.destroy.success')
	end

	private

	def tag_params
		params.require(:tag).permit(:name)
	end

	def current_resource
		@tag = Tag.find_by_id(params[:id])
	end
end
