class Orator < ApplicationRecord
  include OratorSearch

  belongs_to :user
  belongs_to :location
  has_many :orator_themes
  has_many :themes, through: :orator_themes, after_remove: :update_index
  has_many :orator_disponibilities
  has_many :disponibilities, through: :orator_disponibilities

  validates :location_id, presence: true
  validates :themes, presence: true

  def to_param
    "#{id}-#{firstname}-#{lastname}".parameterize
  end

  def firstname
    user.firstname
  end

  def lastname
    user.lastname
  end

end
