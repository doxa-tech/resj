# encoding: utf-8

class BannerUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick
  include CarrierWave::Processing::MiniMagick

  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  version :original, :if => :bad_ratio?

  process :check_size
  process :check_ratio
  process :resize_to_limit => [2500, 1200]
  process :quality => 90
  process :right_orientation

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def check_size
    w, h = ::MiniMagick::Image.open(file.file)[:dimensions]
    if(w < 1000 || h < 180)
      raise CarrierWave::ProcessingError.new("Votre image est trop petite. Une largeur d'au moins 1000px et une hauteur d'au moins 180px est nécessaire.")
    end
  end

  def check_ratio
    crop_ratio if bad_ratio?
  end

  def right_orientation
    manipulate! do |img|
      img.auto_orient
      img
    end
  end

  def bad_ratio?(picture=nil)
    w, h = ::MiniMagick::Image.open(file.file)[:dimensions]
    (w.to_f / h.to_f) < 2.1333
  end

  def crop_ratio
    w, h = ::MiniMagick::Image.open(file.file)[:dimensions]
    manipulate! do |img|
      img.crop("#{w}x#{w.to_f/16*7.5}+#{0}+#{0}")
      img
    end
  end

  # NOTE about ratio and site
  # ratio must not exceed 16 / 7.5
  # size must not exceed 2500px wide (so 1200px height)
  # size must be at least 1000px wide

end
