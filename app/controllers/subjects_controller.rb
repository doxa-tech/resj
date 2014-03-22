class SubjectsController < BaseController
	before_action :authorize_resource

	def index
		@subjects = Subject.all
	end
	
end
