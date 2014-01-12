class CreateOwnerships < ActiveRecord::Migration
  def change
    create_table :ownerships do |t|
      t.belongs_to :element, index: true
      t.belongs_to :user, index: true
      t.belongs_to :ownership_type, index: true
      t.boolean :create
      t.boolean :read
      t.boolean :udate
      t.boolean :delete
      t.integer :id_element

      t.timestamps
    end
  end
end
