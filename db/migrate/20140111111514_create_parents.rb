class CreateParents < ActiveRecord::Migration
  def change
    create_table :parents do |t|
      t.belongs_to :user, index: true
      t.belongs_to :parent, index: true

      t.timestamps
    end
  end
end
