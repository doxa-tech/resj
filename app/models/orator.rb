class Orator < ApplicationRecord

  belongs_to :user
  belongs_to :location

  has_and_belongs_to_many :themes

  accepts_nested_attributes_for :user

  validates :description, presence: true, length: { maximum: 300 }

end
