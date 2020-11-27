class Admin::StatusesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action -> { track_activty(@status) }, only: [:create, :update, :destroy]

	def index
		@table = Table.new(self, Status)
		@table.respond
	end

	def new
		@status = Status.new
	end

	def create 
		@status = Status.new(status_params)
		if @status.save
			redirect_to admin_statuses_path, success: t('status.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @status.update_attributes(status_params)
			redirect_to admin_statuses_path, success: t('status.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@status.destroy
		redirect_to admin_statuses_path, success: t('status.admin.destroy.success')
	end

	private

	def status_params
		params.require(:status).permit(:name, :description)
	end

	def current_resource
		@status = Status.find_by_id(params[:id])
	end

end
