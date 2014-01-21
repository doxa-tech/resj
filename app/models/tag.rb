class Tag < ActiveRecord::Base
	has_many :taggings, dependent: :destroy
	has_many :cards, through: :taggings
end
