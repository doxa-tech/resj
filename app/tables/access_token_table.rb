class	AccessTokenTable < BaseTable

	def attributes
		[:id, :token, :is_valid, {ownership: :full_name}, :created_at, :updated_at, :exp_at]
	end

	def model
		AccessToken
	end

end