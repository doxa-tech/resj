class Disponibility < ApplicationRecord

	has_many :orator_disponibilities
  has_many :orators, through: :orator_disponibilities
end
