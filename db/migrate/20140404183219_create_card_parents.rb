class CreateCardParents < ActiveRecord::Migration
  def change
    create_table :card_parents do |t|
      t.belongs_to :card, index: true
      t.belongs_to :parent, index: true

      t.timestamps
    end
  end
end
