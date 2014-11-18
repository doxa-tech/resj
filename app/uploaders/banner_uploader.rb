# encoding: utf-8

class BannerUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick
  include CarrierWave::Processing::MiniMagick

  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  version :XL do
    process :check_ratio
  end

  version :L do
    process :check_ratio
    process :resize_to_limit => [1200, nil] 
  end

  version :M do
    process :check_ratio
    process :resize_to_limit => [992, nil] 
  end

  version :S do
    process :check_ratio
    process :resize_to_limit => [768, nil] 
  end
  
  process :check_size
  process :resize_to_limit => [2500, 2500]
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
    if(w < 850 || h < 180)
      raise CarrierWave::ProcessingError.new("Votre image est trop petite. Une largeur d'au moins 850px et une hauteur d'au moins 180px est nécessaire.")
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
    ((w.to_f / h.to_f) < 2.1333) || ((w.to_f / h.to_f) > 5.7142)
  end

  def crop_ratio
    w, h = ::MiniMagick::Image.open(file.file)[:dimensions]
    manipulate! do |img|
      if (w.to_f / h.to_f) < 2.1333
        img.crop("#{w}x#{w.to_f/16*7.5}+#{0}+#{0}")
      else
        img.crop("#{h.to_f/2.8*16}x#{h}+#{0}+#{0}")
      end
      img
    end
  end

  # NOTE about ratio and site
  # ratio must not exceed 16 / 7.5 and not bellow 16 / 2.8
  # size must not exceed 2500px
  # size must be at least 850px wide and 180px height (but less than 1000px could result in blank space)
  # recomended size is 1920 x 900

  # Note about versions
  # 3 sizes : XL, L, M, S
  # XL : original size, expected more than 1200px
  # L : max-didth at 1200px
  # M : max-width at 992px
  # S : max-width at 768px

end
