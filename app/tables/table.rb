class Table
	include TablesHelper
	delegate :params, :l, :current_user, :current_group, :render, to: :@view

	def initialize(view, model, is_group = false)
    @view = view
    @model = model
    @is_group = is_group
  end

	def attributes(element)
		element.attributes.map do |attr_name, attr_value|
			if attr_value.is_a?(Date) || attr_value.is_a?(Time) || attr_value.is_a?(DateTime)
				l attr_value, format: :short
			else
				attr_value
			end
		end
	end

	def url(element)
		element.id
	end
end