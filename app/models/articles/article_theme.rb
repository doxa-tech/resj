class ArticleTheme < ApplicationRecord
  belongs_to :article
  belongs_to :theme
end
