class Admin::SubjectsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

	def index
		@table = Table.new(view_context, Subject)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@subject = Subject.new
	end

	def create
		@subject = Subject.new(subject_params)
		@subject.save
		render 'form'
	end

	def edit
	end

	def update
		@subject.update_attributes(subject_params)
		render 'form'
	end

	def destroy
		@subject.destroy
		redirect_to admin_subjects_path, success: t('subject.destroy.success')
	end

	private

	def subject_params
		params.require(:subject).permit(:name, :description, { :theme_ids =>[] }, resources_attributes: [:file, :name, :_destroy] )
	end

	def current_resource
		@subject = Subject.find(params[:id])
	end
end
