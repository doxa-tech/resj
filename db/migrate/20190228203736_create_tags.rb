class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :name, index: true
      t.integer :popularity, default: 0

      t.timestamps
    end
  end
end
