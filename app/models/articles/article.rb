class Article < ActiveRecord::Base
  belongs_to :user
  has_many :article_themes
  has_many :themes, through: :article_themes

  scope :published, -> { where("published_at < ?", Time.now).includes(:user) }

  mount_uploader :image, ArticlesUploader

  validates :title, presence: true, length: { maximum: 60 }
  validates :content, presence: true
  validates :image, presence: true
  validates :themes, presence: true

  ALLOWED_TAGS = %w(footer b strong i em a header q p br a)

  def to_param
    "#{id}-#{title}".parameterize
  end
end