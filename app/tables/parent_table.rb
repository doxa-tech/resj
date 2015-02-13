class ParentTable < BaseTable

	def attributes
		[:id, {user: :full_name}, {parent: :full_name}, :created_at, :updated_at]
	end

	def model
		Parent
	end
end