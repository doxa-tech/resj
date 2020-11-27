class CreateOrators < ActiveRecord::Migration[4.2]
  def change
    create_table :orators do |t|
      t.belongs_to :user, index: true
      t.string :street
      t.belongs_to :location, index: true
      t.string :phone
      t.string :disponibility

      t.timestamps null: false
    end
  end
end
