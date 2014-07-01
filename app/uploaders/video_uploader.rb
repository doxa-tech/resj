class VideoUploader < CarrierWave::Uploader::Base
  include CarrierWave::Video


  version :document, if :document? do

  end

  version :video, if :video? do
  	process encode_video: [:mp4, resolution: :same, video_bitrate: :same ]
  end


  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

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

  def document?
  	!video?
  end

  def video?
  	model.file.file.extension.downcase.in?(VIDEO_EXT)
  end

end