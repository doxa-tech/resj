class UserTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.name,
			element.email,
			element.gravatar_email,
			element.password_digest,
			element.remember_token,
			element.user_type.try(:name),
			element.uid,
			element.created_at,
			element.updated_at,
			element.responsable.try(:name)
		]
	end

	def url(element)
		element.id
	end

	def model
		User
	end

end