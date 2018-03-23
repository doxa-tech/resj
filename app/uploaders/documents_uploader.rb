# encoding: utf-8

class DocumentsUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  # include Sprockets::Helpers::RailsHelper
  # include Sprockets::Helpers::IsolatedHelper


  # Choose what kind of storage to use for this uploader:
  # storage :file
  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    if Rails.env.production?
      "uploads/documents/#{model.id}"
    else
      "#{Rails.root}/uploads/documents/#{model.id}"
    end
  end

  def cache_dir
    "/tmp/uploads/documents/#{model.id}"
  end

  def extension_whitelist
    %w[doc docx ppt pptx xls xlsx pdf odt odp ods].concat(Document::VIDEO_EXT)
  end

  def self.fog_public
    false
  end

  private

  def document? picture
    !video?(picture)
  end

  def video? picture
    return model.file.file.extension.downcase.in?(Document::VIDEO_EXT)
  end

end
