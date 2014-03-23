class Tagging < ActiveRecord::Base
  belongs_to :card
  belongs_to :tag

  after_create :reindex_tags
  around_destroy :reindex_tags

  private

  def reindex_tags
    #card.index(card)
  end

end
