class CreateOwnershipActions < ActiveRecord::Migration[4.2]
  def change
    create_table :ownership_actions do |t|
    	t.belongs_to :action, index: true
    	t.belongs_to :ownership, index: true

      t.timestamps null: false
    end
  end
end
