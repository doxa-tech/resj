class Status < ActiveRecord::Base
	has_many :cards

	validates :name, presence: true, length: { maximum: 30 }

	after_save :saving_reindex
  after_destroy :destroying_reindex

  private

  def saving_reindex
		Sunspot.index(cards)
  end

  def destroying_reindex
  	Card.reindex
  end
end
