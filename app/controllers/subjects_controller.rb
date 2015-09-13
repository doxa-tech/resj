class SubjectsController < BaseController
	before_action :authorize_resource

	def index
    js true
  	@subjects = Subject.search(params).includes(:themes, :documents)
	end

	def show
		@subject = Subject.find(params[:id])
	end
end
