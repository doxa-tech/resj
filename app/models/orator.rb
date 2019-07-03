class Orator < ApplicationRecord

  belongs_to :user
  belongs_to :location

  has_and_belongs_to_many :disponibilities
  has_and_belongs_to_many :themes

end
