class SubjectTheme < ActiveRecord::Base
  belongs_to :subject
  belongs_to :theme

  after_create :reindex_tags
  around_destroy :reindex_tags

  private

  def reindex_tags
    subject.index!
  end
end
