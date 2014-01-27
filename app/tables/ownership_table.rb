class OwnershipTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.element.try(:name),
			element.user.try(:name),
			element.ownership_type.try(:name),
			element.right_create,
			element.right_read,
			element.right_update,
			element.right_delete,
			element.id_element,
			element.created_at,
			element.updated_at
		]
	end

	def url(element)
		element.id
	end

	def model
		Ownership
	end
end