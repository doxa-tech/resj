#!/bin/env ruby
# encoding: utf-8

module Table

	def sort_column(model = @model)
   model.column_names.include?(params[:sort]) ? params[:sort] : "id"
  end
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end

  def sortable(column, model, link = nil)
  	if model.reflect_on_association(column.gsub('_id', '').to_sym).nil?
		  title = model.human_attribute_name(column)
		  link ||= request.path
		  css_class = column == sort_column(model) ? "current #{sort_direction}" : nil
		  direction = column == sort_column(model) && sort_direction == "asc" ? "desc" : "asc"
		  link_to title, link + "?sort=#{column}&direction=#{direction}&query=#{params[:query]}&utf8=#{params[:utf8]}", {remote: true, class: css_class}
	 	else
	 		model.human_attribute_name(column)
	 	end
	end

	def elements
		if @is_group == false
			index_ownerships
			if @ownerships_all.any?
				@elements = @model.order(sort_column + " " + sort_direction)
			else
				if @ownerships_on_ownership.any?
					@elements = @model.order(sort_column + " " + sort_direction).where('user_id = ? or id in (?)', current_user.id, @ownerships_on_entry)
				else
					if @ownerships_on_entry.any?
						@elements = @model.order(sort_column + " " + sort_direction).where('id in (?)', @ownerships_on_entry)
					end
				end
			end
		else
			@elements = @model.where('group_id = ?', current_group.id).order(sort_column + " " + sort_direction)
		end
		if @elements.nil?
			@elements = []
		else
			@elements = @elements.paginate(page: params[:page], per_page: 30)
		end
		if params[:query].present?
			@elements = @elements.search(params[:query])
		end
		@elements
	end

	def build(link = nil)
		render 'tables/table', table: self, elements: elements, model: @model, link: link
	end
end