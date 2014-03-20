class Orator < ActiveRecord::Base
  belongs_to :user
  belongs_to :location
  has_many :orator_themes
  has_many :themes, through: :orator_themes
  has_many :orator_disponibilities
  has_many :disponibilities, through: :orator_disponibilities

  searchable do
    text :firstname
    text :lastname
    integer :canton_ids, multiple: true
    integer :theme_ids, multiple: true
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

  def theme_ids
    themes.pluck(:id)
  end

end
