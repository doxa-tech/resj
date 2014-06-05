class SubjectsController < BaseController
	before_action :authorize_resource

	def index
		@search = Subject.search do 
			fulltext params[:query]
			paginate page: params[:page] if params[:page]
			with(:themes_ids, params[:themes_ids]) if params[:themes_ids]
		end
  	@subjects = @search.results
	end

	def show
		@subject = Subject.find(params[:id])
	end
end
