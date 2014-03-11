class Article < ActiveRecord::Base
  belongs_to :user

  mount_uploader :image, ArticlesUploader
end
