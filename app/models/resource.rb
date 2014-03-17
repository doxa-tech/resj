class Resource < ActiveRecord::Base
	belongs_to :subject

	validates :name, presence: true, length: { maximum: 30 }
	validates :file, presence: true

	mount_uploader :file, ResourcesUploader
end
