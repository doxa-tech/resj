class Canton < ActiveRecord::Base
	has_many :locations

	after_save :reindex
  after_destroy :reindex

  private

  def reindex
  	Orator.reindex
  	Card.reindex
  end
end
