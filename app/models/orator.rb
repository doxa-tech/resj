class Orator < ActiveRecord::Base
  belongs_to :user
  belongs_to :location
  has_many :orator_themes
  has_many :themes, through: :orator_themes
  has_many :orator_disponibilities
  has_many :disponibilities, through: :orator_disponibilities

  validates :location_id, presence: true
  validates :themes, presence: true
  validates :disponibilities, presence: true

  searchable do
    text :firstname
    text :lastname
    integer :canton_ids, multiple: true
    integer :themes_ids, multiple: true
  end

  def to_param
    "#{id}-#{firstname}-#{lastname}".parameterize
  end

  def firstname
    user.firstname
  end

  def lastname
    user.lastname
  end

  def canton_ids
    location.canton.id  
  end

  def themes_ids
    themes.pluck(:id)
  end

end
