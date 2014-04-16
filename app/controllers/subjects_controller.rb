class SubjectsController < BaseController
	before_action :authorize_resource

	def index
		@subjects = Subject.all.reverse
	end

	def show
		@subject = Subject.find(params[:id])
	end
end
