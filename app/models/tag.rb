class Tag < ApplicationRecord
	has_many :taggings, dependent: :destroy
	has_many :cards, through: :taggings

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

  after_update { self.taggings.each(&:touch) }
end
