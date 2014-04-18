class Admin::SubjectsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @subject }

	def index
		@table = Table.new(view_context, Subject)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@subject = current_user.subjects.new
	end

	def create 
		@subject = current_user.subjects.new(subject_params)
		if @subject.save
			redirect_to admin_subjects_path, success: t('subject.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @subject.update_attributes(subject_params)
			redirect_to admin_subjects_path, success: t('subject.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@subject.destroy
		redirect_to admin_subjects_path, success: t('subject.destroy.success')
	end

	private

	def subject_params
		params.require(:subject).permit(:name, :description, { :theme_ids =>[] }, documents_attributes: [:id, :file, :name, :_destroy] )
	end

	def current_resource
		@subject = Subject.find(params[:id])
	end
end
