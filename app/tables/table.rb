class Table < BaseTable

	def initialize(template, model)
		@template = template
		@model = model
	end

	def attributes(element)
		element.attributes.map do |attr_name, attr_value|
			if attr_value.is_a?(Date) || attr_value.is_a?(Time) || attr_value.is_a?(DateTime)
				h.l(attr_value, format: :short)
			else
				attr_value
			end
		end
	end

	def url(element)
		element.id
	end

	def model
		@model
	end

end