class BaseTable

	def initialize(template, collection = nil, options = {})
		@template = template
		@collection = collection
		@options = options
	end

	def collection
		(@collection || h.current_permission.elements(h.params[:controller], model)).order(sort_column + " " + sort_direction).paginate(page: h.params[:page], per_page: 30)
	end

	def elements
		if h.params[:query] != ""
			@search = model.search do 
      	fulltext h.params[:query]
      	paginate page: h.params[:page] if h.params[:page]
      end
      @search.results
		else
			collection
		end
	end

	def sort_column
   	model.column_names.include?(h.params[:sort]) ? h.params[:sort] : "id"
  end
  
  def sort_direction
    %w[asc desc].include?(h.params[:direction]) ? h.params[:direction] : "desc"
  end

  def sortable(column)
  	if model.reflect_on_association(column.gsub('_id', '').to_sym).nil?
		  title = model.human_attribute_name(column)
		  css_class = column == sort_column ? "current #{sort_direction}" : nil
		  direction = column == sort_column && sort_direction == "asc" ? "desc" : "asc"
		  h.link_to title, h.request.path + "?sort=#{column}&direction=#{direction}&query=#{h.params[:query]}&page=#{h.params[:page]}&utf8=#{h.params[:utf8]}", {remote: true, class: css_class}
	 	else
	 		model.human_attribute_name(column)
	 	end
	end

	def options
		@options
	end

	private

	def h
		@template
	end

end