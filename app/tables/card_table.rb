class CardTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.card_type.try(:name),
			element.name,
			element.email,
			element.street,
			element.npa,
			element.city,
			element.place,
			element.website,
			element.password_digest,
			element.description,
			element.affiliations,
			element.validated,
			element.created_at,
			element.updated_at,
			element.latitude,
			element.longitude,
			element.avatar_url,
			element.banner_url,
			element.card.try(:name)
		]
	end

	def url(element)
		element.id
	end

	def model
		Card
	end
end