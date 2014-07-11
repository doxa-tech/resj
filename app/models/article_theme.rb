class ArticleTheme < ActiveRecord::Base
  belongs_to :article
  belongs_to :theme

  after_create :reindex_tags
  around_destroy :reindex_tags

  private

  def reindex_tags
    article.index!
  end
end