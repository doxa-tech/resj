# encoding: utf-8

class AvatarUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick
  include CarrierWave::Processing::MiniMagick

  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  process :resize_to_limit => [1920, 1920]
  process :quality => 90
  process :right_orientation

  version :thumb do
    process resize_to_limit: [180, 180]
    process :quality => 90
    process :right_orientation
  end

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  def right_orientation
    manipulate! do |img|
      img.auto_orient
      img
    end
  end

end
