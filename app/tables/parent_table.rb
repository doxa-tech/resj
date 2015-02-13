class ParentTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.user.full_name,
			element.parent.full_name,
			element.created_at,
			element.updated_at
		]
	end

	def model
		Parent
	end
end