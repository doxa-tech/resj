class User < ApplicationRecord

  has_secure_password

  has_many :cards
  has_one :orator

end
