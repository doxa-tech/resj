class CreateCantons < ActiveRecord::Migration
  def change
    create_table :cantons do |t|
      t.string :name
      t.string :abbreviation

      t.timestamps null: false
    end
  end
end
