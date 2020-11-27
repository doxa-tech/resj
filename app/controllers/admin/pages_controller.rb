class Admin::PagesController < Admin::BaseController
	before_action :current_resource, only: [:edit, :update, :destroy]
	after_action -> { track_activity(@page) }, only: [:update]

	def index
		@table = PageTable.new(self)
		@table.respond
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
