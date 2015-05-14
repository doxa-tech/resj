class OwnershipTable < BaseTable

	def attributes
		[
			:id, {element: :name}, {user: :full_name}, {ownership_type: :name}, :right_create, 
			:right_read, :right_update, :right_delete, :id_element, :created_at, :updated_at
		]
	end

	def model
		Ownership
	end

	module Search

	 	def self.associations
	 		[:element, :user]
	 	end

	 	def self.fields
	 		{ elements: [:name], users: [:firstname, :lastname]}
	 	end
	end
end