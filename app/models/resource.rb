class Resource < ActiveRecord::Base

	has_many :resource_themes
	has_many :themes, through: :resource_themes

	validates :name, presence: true, length: { maximum: 15 }

	mount_uploader :file, ResourcesUploader
end
