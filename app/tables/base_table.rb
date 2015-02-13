class BaseTable < SimpleDelegator

	def initialize(parent, collection = nil, options = {})
		super(parent)
		@collection = collection
		@options = options
		@token = stored_token
	end

	def collection
		@collection ||= current_permission.records(params[:controller], model, @token).includes(belongs_to_associations)
	end

	def records
		@records ||= filter(collection).paginate(page: params[:page], per_page: 30).order(sort_column + " " + sort_direction)
	end

	def filter(collection)
		if options[:search] == true
			collection.joins(search_associations).where(query_fields, query: "%#{params[:query]}%", id: params[:query].to_i)
		else
			collection
		end
	end

	def sort_column
   	column_names.include?(params[:sort]) ? column_name(params[:sort]) : column_name("id")
  end
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "desc"
  end

  def sortable(column)
  	if model.reflect_on_association(column.gsub /_id/, '').nil?
		  title = model.human_attribute_name(column)
		  css_class = column_name(column) == sort_column ? "current #{sort_direction}" : nil
		  direction = column_name(column) == sort_column && sort_direction == "asc" ? "desc" : "asc"
		  page = params[:page] || 1
		  view_context.link_to title, request.path + "?sort=#{column}&direction=#{direction}&query=#{params[:query]}&page=#{page}&utf8=#{params[:utf8]}", {remote: true, class: css_class}
	 	else
	 		model.human_attribute_name(column)
	 	end
	end

	def options
		@options
	end

	def column_names
		model.column_names
	end

	def url(e)
		e.id
	end

	def present
		render_to_string('application/tables/base', layout: false, locals: { presenter: self }).html_safe
	end

	def respond
    respond_to do |format|
      format.html
      format.js { render 'application/tables/sort' }
    end
  end

	private

	def column_name(column)
		"#{model.table_name}.#{column}"
	end

	def stored_token
    session[:token] = params[:token] if params[:token]
    return session[:token]
  end

	def query_fields
		self.class::Search.fields.map do |key, values|
			values.map do |value|
				values.map{ |v| "#{key}.#{v} LIKE :query OR"}.join(" ")
			end
		end.join(" ") + " #{column_name('id')} = :id"
	end

	def search_associations
		self.class::Search.associations
	end

	def belongs_to_associations
		model.reflect_on_all_associations(:belongs_to).map{ |a| a.name }
	end

end