class Admin::ActionsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

	def index
		@table = Table.new(view_context, Action)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@action = Action.new
	end

	def create 
		@action = Action.new(action_params)
		if @action.save
			redirect_to admin_actions_path, success: t('action.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
		@action = Action.find(params[:id])
	end

	def update
		@action = Action.find(params[:id])
		if @action.update_attributes(action_params)
			redirect_to admin_actions_path, success: t('action.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		Action.find(params[:id]).destroy
		redirect_to admin_pathreplace_path, success: t('action.admin.destroy.success')
	end

	private

	def action_params
		params.require(:action).permit(:name)
	end

	def current_resource
		@action = Action.find(params[:id])
	end

end