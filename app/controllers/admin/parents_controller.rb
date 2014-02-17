class Admin::ParentsController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]

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

	def edit
	end

	def update
		if @parent.update_attributes(parent_params)
			redirect_to admin_pages, success: 'parent.admin.edit.success'
		else
			render 'edit'
		end
	end

	private

	def parent_params
  	params.require(:parent).permit(:user_id, :parent_id)
  end

  def current_resource
  	@parent = Parent.find(params[:id])
  end
end
