class UserTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.email,
			element.gravatar_email,
			element.password_digest,
			element.remember_token,
			element.user_type.name,
			element.uid,
			element.created_at,
			element.updated_at,
			element.reset_token,
			element.reset_sent_at,
			element.firstname,
			element.lastname,
			element.confirmed
		]
	end

	def model
		User
	end

	module Search

	 	def self.associations
	 	end

	 	def self.fields
	 		{"users" => ["firstname", "lastname", "email"]}
	 	end
	end
end