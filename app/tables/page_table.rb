class PageTable < BaseTable

	def attributes
		[:id, :name, :content, :created_at, :updated_at]
	end

	def model
		Page
	end

end