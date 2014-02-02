class Admin::ResponsablesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

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
		@responsable = Responsable.find(params[:id])
	end

	def update
		@responsable = Responsable.find(params[:id])
		if @responsable.update_attributes(responsable_params)
			redirect_to admin_responsables_path, success: t('responsable.admin.create.success')
		else
			render 'edit'
		end
	end

	def destroy
		Responsable.find(params[:id]).destroy
		redirect_to admin_responsables_path, success: t('responsable.admin.create.success')
	end

	private

	def responsable_params
		params.require(:responsable).permit(:firstname, :lastname, :email)
	end

	def current_resource
		@responsable = Responsable.find(params[:id])
	end

end
