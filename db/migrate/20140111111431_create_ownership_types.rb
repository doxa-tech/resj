class CreateOwnershipTypes < ActiveRecord::Migration
  def change
    create_table :ownership_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
