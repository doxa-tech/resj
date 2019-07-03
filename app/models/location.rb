class Location < ApplicationRecord

  belongs_to :canton
  has_many :cards
  has_many :orators

end
