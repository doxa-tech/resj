class Admin::PagesController < Admin::BaseController

	def index
		@table = PageTable.new(view_context)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end

	def edit
		@page = Page.find(params[:id])
	end

	def update
		@page = Page.find(params[:id])
		if @page.update_attributes(page_params)
			redirect_to admin_pages, success: 'page.admin.edit.success'
		else
			render 'edit'
		end
	end

	private

	def page_params
  	params.require(:page).permit(:content)
  end
end
