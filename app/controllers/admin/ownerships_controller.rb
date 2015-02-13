class Admin::OwnershipsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @ownership }

	def index
		@table = OwnershipTable.new(self, nil, search: true)
		@table.respond
	end

	def new
		@ownership = Ownership.new
	end

	def create
		@ownership = Ownership.new(ownership_params)
		if @ownership.save
			redirect_to admin_ownerships_path, success: t('ownership.admin.create.success')
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @ownership.update_attributes(ownership_params)
			redirect_to admin_ownerships_path, success: t('ownership.admin.edit.success')
		else
			render 'edit'
		end
	end

	def destroy
		@ownership.destroy
		redirect_to admin_ownerships_path, success: t('ownership.admin.destroy.success')
	end

	private

	def ownership_params
		params.require(:ownership).permit(:element_id, :user_id, :ownership_type_id, :right_create, :right_update, :right_read, :right_delete, :id_element, actions_attributes: [:id, :name, :_destroy])
	end

	def current_resource
		@ownership = Ownership.find_by_id(params[:id])
	end

end
