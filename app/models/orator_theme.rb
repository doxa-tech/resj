class OratorTheme < ActiveRecord::Base
  belongs_to :orator
  belongs_to :theme

  after_create :reindex_tags
  around_destroy :reindex_tags

  private

  def reindex_tags
    orator.index!
  end
end
