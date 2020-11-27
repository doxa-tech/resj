class CreateCantons < ActiveRecord::Migration[4.2]
  def change
    create_table :cantons do |t|
      t.string :name
      t.string :abbreviation

      t.timestamps null: false
    end
  end
end
