class ArticleTable < BaseTable

	def attributes
		[:id, :title, :content, {user: :full_name}, :image_url, :likes, :created_at, :updated_at, :published_at]
	end

	def model
		Article
	end
end