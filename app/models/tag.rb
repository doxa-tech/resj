class Tag < ActiveRecord::Base
  include TireAssociations

	has_many :taggings, dependent: :destroy
	has_many :cards, through: :taggings

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

  after_save { |m| m.saving_reindex(Card, cards) }
  after_destroy { |m| m.destroying_reindex(Card) }
end
