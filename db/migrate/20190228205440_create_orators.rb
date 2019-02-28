class CreateOrators < ActiveRecord::Migration[6.0]
  def change
    create_table :orators do |t|
      t.belongs_to :user, foreign_key: true
      t.string :street
      t.belongs_to :location, foreign_key: true
      t.string :disponibility
      t.text :description
      t.boolean :disabled

      t.timestamps
    end
  end
end
