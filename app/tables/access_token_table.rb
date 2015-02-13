class	AccessTokenTable < BaseTable

	def attributes(element)
		[
			element.id,
			element.token,
			element.is_valid,
			element.ownership.full_name,
			element.created_at,
			element.updated_at,
			element.exp_at
		]
	end

	def model
		AccessToken
	end

end