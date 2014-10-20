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
			element.created_at,
			element.updated_at,
			element.latitude,
			element.longitude,
			element.avatar_url,
			element.banner_url,
			element.location.full_name,
			element.user.full_name,
			element.status.name
		]
	end

	def url(element)
		element.id
	end

	def model
		Card
	end

	module Search

	 	def self.associations
	 		[:user, :card_type]
	 	end

	 	def self.fields
	 		{"cards" => ["name"], "users" => ["firstname", "lastname"], "card_types" => ["name"], "status" => {"name"} }
	 	end
	end
end