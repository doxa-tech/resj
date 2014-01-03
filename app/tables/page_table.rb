class PageTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.name,
			element.content,
			element.created_at,
			element.updated_at
		]
	end

	def url(element)
		element.id
	end

	private

	def model
		Page
	end

end