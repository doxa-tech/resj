class Article < ActiveRecord::Base
  belongs_to :user

  mount_uploader :file, ArticleUploader
end
