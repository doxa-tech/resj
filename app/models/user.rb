class User < ApplicationRecord

  has_many :cards
  has_one :orator

end
