class Admin::ResourcesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

	def index
		@table = Table.new(view_context, Resource)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@resource = Resource.new
	end

	def create
		@resource = Resource.new(resource_params)
		if @resource
			redirect_to resources_path, success: t('resource.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @resource.update_attributes(resource_params)
			redirect_to resources_path, success: t('resource.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@resource.destroy
		redirect_to resources_path, success: t('resource.destroy.success')
	end

	private

	def resource_params
		params.require(:resource).permit(:file, :name, { :theme_ids =>[] })
	end

	def current_resource
		@resource = Resource.find(params[:id])
	end

end
