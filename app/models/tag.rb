class Tag < ActiveRecord::Base
	has_many :taggings, dependent: :destroy
	has_many :cards, through: :taggings

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

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
