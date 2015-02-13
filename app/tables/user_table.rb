class UserTable < BaseTable

	def attributes
		[
			:id, :email, :gravatar_email, :password_digest, :remember_token, {user_type: :name}, 
			:uid, :created_at, :updated_at, :reset_token, :reset_sent_at, :firstname, :lastname, :confirmed
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