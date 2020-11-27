class AddLatitudeLongitudeToCards < ActiveRecord::Migration[4.2]
  def change
  	add_column :cards, :latitude, :float
  	add_column :cards, :longitude, :float
  end
end
