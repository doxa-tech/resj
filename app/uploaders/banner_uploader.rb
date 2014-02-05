# encoding: utf-8

class BannerUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick

  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  process :resize_to_limit => [1200, 740]
  process :quality => 90
  process :right_orientation

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def right_orientation
    manipulate! do |img|
      img.auto_orient
      img
    end
  end

end
