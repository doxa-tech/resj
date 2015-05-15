class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
