# encoding: utf-8

class DocumentsUploader < CarrierWave::Uploader::Base
  require 'streamio-ffmpeg'

  after :store, :unlink_original

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  # include Sprockets::Helpers::RailsHelper
  # include Sprockets::Helpers::IsolatedHelper


  # Even empty, that process ensure a file is saved
  # because all original files are deleted after upload !
  version :document, if: :document? do
    # Document process go here
  end

  version :mp4, if: :video? do
    process encode_video: [custom: %q(-vcodec libx264 -acodec libfaac -vf "scale='min(iw,1920)':-1" )]
    def full_filename (for_file = model.source.file)
      super.chomp(File.extname(super)) + '.mp4'
    end
  end

  # bye carrierwave-video
  # Use streamio-ffmpeg
  def encode_video(opts={})
    cache_stored_file! if !cached?
    tmp_path = File.join( File.dirname(current_path), "tmpfile.mp4" )
    movie = ::FFMPEG::Movie.new(current_path)
    movie.transcode(tmp_path, opts) do |progress|
      puts progress
    end
    File.rename tmp_path, current_path
  end

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

  def extension_white_list
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

  def unlink_original(file)
    if self.version_name.nil?
      self.file.delete if self.file.exists?
    end
  end

end
