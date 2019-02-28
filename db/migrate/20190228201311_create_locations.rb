class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.integer :zip
      t.string :official_name
      t.string :post_name
      t.belongs_to :canton, foreign_key: true
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
