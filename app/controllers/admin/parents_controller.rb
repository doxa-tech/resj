class Admin::ParentsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:create, :update, :destroy] { |c| c. track_activity @parent }

	def index
		@table = ParentTable.new(view_context)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def new
		@parent = Parent.new
	end

	def create
		@parent = Parent.new(parent_params)
		if @parent.save
			redirect_to admin_parents_path, success: 'parent.admin.create.success'
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @parent.update_attributes(parent_params)
			redirect_to admin_parents_path, success: 'parent.admin.edit.success'
		else
			render 'edit'
		end
	end

	def destroy
		@parent.destroy
		redirect_to admin_parents_path, success: 'parent.admin.destroy.success'
	end

	private

	def parent_params
  	params.require(:parent).permit(:user_id, :parent_id)
  end

  def current_resource
  	@parent = Parent.find_by_id(params[:id])
  end
end
