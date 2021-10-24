class Tag < ApplicationRecord

  has_many :taggings
  has_many :cards, through: :taggings

end
