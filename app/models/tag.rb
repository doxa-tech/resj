class Tag < ActiveRecord::Base
	has_many :taggings, dependent: :destroy
	has_many :cards, through: :taggings

  validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
end
