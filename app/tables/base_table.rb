class BaseTable

	def initialize(template, collection = nil, options = {})
		@template = template
		@collection = collection
		@options = options
	end

	def collection
		(@collection || h.current_permission.records(h.params[:controller], model, h.session[:token])).paginate(page: h.params[:page], per_page: 30)
	end

	def records
		if options[:search]
			collection.joins(search_associations).where(query_fields, query: "%#{h.params[:query]}%", id: h.params[:query].to_i).order(sort_column + " " + sort_direction)
		else
			collection.includes(belongs_to_associations).order(sort_column + " " + sort_direction)
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
		  page = h.params[:page] || 1
		  h.link_to title, h.request.path + "?sort=#{column}&direction=#{direction}&query=#{h.params[:query]}&page=#{page}&utf8=#{h.params[:utf8]}", {remote: true, class: css_class}
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

	def query_fields
		self.class::Search.fields.map do |key, values|
			values.map do |value|
				values.map{ |v| "#{key}.#{v} LIKE :query OR"}.join(" ")
			end
		end.join(" ") + " #{model.table_name}.id = :id"

	end

	def search_associations
		self.class::Search.associations
	end

	def belongs_to_associations
		model.reflect_on_all_associations(:belongs_to).map{ |a| a.name }
	end

end