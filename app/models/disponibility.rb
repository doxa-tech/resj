class Disponibility < ActiveRecord::Base

	has_many :orator_disponibilities
  has_many :orators, through: :orator_disponibilities
end
