class CreateOwnerships < ActiveRecord::Migration[4.2]
  def change
    create_table :ownerships do |t|
      t.belongs_to :element, index: true
      t.belongs_to :user, index: true
      t.belongs_to :ownership_type, index: true
      t.boolean :right_create
      t.boolean :right_read
      t.boolean :right_update
      t.boolean :right_delete
      t.integer :id_element

      t.timestamps null: false
    end
  end
end
