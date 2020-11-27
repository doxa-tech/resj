class CreateParents < ActiveRecord::Migration[4.2]
  def change
    create_table :parents do |t|
      t.belongs_to :user, index: true
      t.belongs_to :parent, index: true

      t.timestamps null: false
    end
  end
end
