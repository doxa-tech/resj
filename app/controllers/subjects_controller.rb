class SubjectsController < BaseController
	before_action :authorize_resource

	def index
  	@subjects = Subject.search(params).includes(:themes, :documents)
	end

	def show
		@subject = Subject.find(params[:id])
	end
end
