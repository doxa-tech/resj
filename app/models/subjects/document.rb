class Document < ApplicationRecord
	belongs_to :subject

	validates :name, presence: true, length: { maximum: 30 }
	validates :file, presence: true

	mount_uploader :file, DocumentsUploader

	before_save :update_file_attributes

  VIDEO_EXT = %w[ mp4 ]

  private

  def update_file_attributes
    if file.present? && file_changed?
      self.extension = file.file.extension.downcase
      self.size = file.size
    end
  end

end
