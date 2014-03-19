class Orator < ActiveRecord::Base
  belongs_to :user
  belongs_to :location
  has_many :orator_themes
  has_many :themes, through: :orator_themes
  has_many :orator_disponibilities
  has_many :disponibilities, through: :orator_disponibilities

  searchable do
    #text :firstname
    #text :last_name
    #integer :canton_ids, multiple: true
    #integer :theme_ids, multiple: true
  end

end
