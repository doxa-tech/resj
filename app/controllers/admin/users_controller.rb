class Admin::UsersController < Admin::BaseController

	def index
		@table = UserTable.new(view_context)
		respond_to do |format|
			format.html
			format.js { render 'sort' }
		end
	end
end
