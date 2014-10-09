class Admin::ResponsablesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @responsable }

	def index
		@table = Table.new(view_context, Responsable)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new 
		@responsable = Responsable.new
	end

	def create 
		@responsable = Responsable.new(responsable_params)
		if @responsable.save
			redirect_to admin_responsables_path, success: t('responsable.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @responsable.update_attributes(responsable_params)
			redirect_to admin_responsables_path, success: t('responsable.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@responsable.destroy
		redirect_to admin_responsables_path, success: t('responsable.admin.destroy.success')
	end

	private

	def responsable_params
		params.require(:responsable).permit(:firstname, :lastname, :email)
	end

	def current_resource
		@responsable = Responsable.find_by_id(params[:id])
	end

end
