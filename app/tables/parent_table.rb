class ParentTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.user.name,
			element.parent.name,
			element.created_at,
			element.updated_at
		]
	end

	def url(element)
		element.id
	end

	def model
		Parent
	end
end