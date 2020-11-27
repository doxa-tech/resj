class CreateTags < ActiveRecord::Migration[4.2]
  def change
    create_table :tags do |t|
      t.string :name
      t.integer :popularity, default: 0

      t.timestamps null: false
    end
  end
end
