class CreateLocations < ActiveRecord::Migration[4.2]
  def change
    create_table :locations do |t|
      t.float :npa
      t.string :official_name
      t.string :post_name
      t.belongs_to :canton, index: true

      t.timestamps null: false
    end
  end
end
