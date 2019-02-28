class CreateCantons < ActiveRecord::Migration[6.0]
  def change
    create_table :cantons do |t|
      t.string :name
      t.string :abbreviation

      t.timestamps
    end
  end
end
