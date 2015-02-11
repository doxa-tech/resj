class Admin::PagesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action only: [:update] { |c| c. track_activity @page }

	def index
		@table = PageTable.new(view_context, nil, buttons: false)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def edit
	end

	def update
		if @page.update_attributes(page_params)
			redirect_to admin_pages_path, success: t('page.admin.edit.success')
		else
			render 'edit'
		end
	end

	private

	def page_params
  	params.require(:page).permit(:content)
  end

  def current_resource
  	@page = Page.find_by_id(params[:id])
  end

end
