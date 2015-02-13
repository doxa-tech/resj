class CardTable < BaseTable

	def attributes
		[
			:id, {card_type: :name}, :name, :email, :street, :place, :website, :password_digest, 
			:description, :affiliation, :created_at, :updated_at, :latitude, :longitude, :avatar_url, 
			:banner_url, {location: :full_name}, {user: :full_name}, {status: :name}
		]
	end

	def model
		Card
	end

	module Search

	 	def self.associations
	 		[:user, :card_type, :status]
	 	end

	 	def self.fields
	 		{"cards" => ["name"], "users" => ["firstname", "lastname"], "card_types" => ["name"], "statuses" => ["name"] }
	 	end
	end
end