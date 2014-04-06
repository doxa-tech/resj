class CardTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.card_type.name,
			element.name,
			element.email,
			element.street,
			element.place,
			element.website,
			element.password_digest,
			element.description,
			element.affiliation,
			element.validated,
			element.created_at,
			element.updated_at,
			element.latitude,
			element.longitude,
			element.avatar_url,
			element.banner_url,
			element.location.full_name,
			element.user.full_name,
			element.visible
		]
	end

	def url(element)
		element.id
	end

	def model
		Card
	end
end