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
			flash[:success] = "Sujet créé"
			render 'redirect', locals: { path: '/admin/subjects' }
		else
			render 'form_error', locals: { object: @subject }
		end
	end

	def edit
		js 'Admin/Subjects#new'
	end

	def update
		if @subject.update_attributes(subject_params)
			flash[:success] = "Sujet édité"
			render 'redirect', locals: { path: '/admin/subjects' }
		else
			render 'form_error', locals: { object: @subject }
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
