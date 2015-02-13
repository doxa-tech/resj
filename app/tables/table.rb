class Table < BaseTable

	def initialize(parent, model, collection = nil, options = {})
		super(parent, collection, options)
		@model = model
	end

	def attributes(element)
		element.attributes.map do |attr_name, attr_value|
			if attr_value.is_a?(Date) || attr_value.is_a?(Time) || attr_value.is_a?(DateTime)
				l(attr_value, format: :short)
			else
				attr_value
			end
		end
	end

	def model
		@model
	end

end