class AddLatitudeLongitudeToCards < ActiveRecord::Migration
  def change
  	add_column :cards, :latitude, :float
  	add_column :cards, :longitude, :float
  end
end
