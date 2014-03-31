class Article < ActiveRecord::Base
  belongs_to :user
  has_many :article_themes
  has_many :themes, through: :article_themes

  mount_uploader :image, ArticlesUploader

  validates :title, presence: true, length: { maximum: 60 }
  validates :content, presence: true
  validates :image, presence: true
  validates :themes, presence: true

  def to_param
    "#{id}-#{title}".parameterize
  end
end