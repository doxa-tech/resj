class Tag < ActiveRecord::Base
	has_many :taggings, dependent: :destroy
	has_many :cards, through: :taggings

	after_save :reindex_tags
  around_destroy :reindex_tags

  private

  def reindex_tags
    Sunspot.index(cards)
  end
end
