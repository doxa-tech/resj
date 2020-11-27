class Admin::ActionsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action -> { track_activity(@action) }, only: [:create, :update, :destroy]

	def index
		@table = Table.new(self, Action)
		@table.respond
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
	end

	def update
		if @action.update_attributes(action_params)
			redirect_to admin_actions_path, success: t('action.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@action.destroy
		redirect_to admin_actions_path, success: t('action.admin.destroy.success')
	end

	private

	def action_params
		params.require(:own_action).permit(:name)
	end

	def current_resource
		@action = Action.find_by_id(params[:id])
	end

end
