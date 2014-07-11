class Orator < ActiveRecord::Base
  belongs_to :user
  belongs_to :location
  has_many :orator_themes
  has_many :themes, through: :orator_themes
  has_many :orator_disponibilities
  has_many :disponibilities, through: :orator_disponibilities

  validates :location_id, presence: true
  validates :themes, presence: true
  
  searchable do
    text :firstname
    text :lastname
    text :canton_name
    text :theme_names
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

  def canton_name
    location.canton.name
  end

  def themes_ids
    themes.pluck(:id)
  end

  def theme_names
    themes.pluck(:name)
  end

end
