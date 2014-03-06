class ArticleTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.title,
			element.content,
			element.user.full_name,
			element.image_url,
			element.likes,
			element.created_at,
			element.updated_at
		]
	end

	def url(element)
		element.id
	end

	def model
		Article
	end
end