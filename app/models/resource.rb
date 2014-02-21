class Resource < ActiveRecord::Base

	has_many :resource_themes
	has_many :themes, through: :resource_themes
end
