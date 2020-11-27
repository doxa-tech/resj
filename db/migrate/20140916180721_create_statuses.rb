class CreateStatuses < ActiveRecord::Migration[4.2]
  def change
    create_table :statuses do |t|
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
