class CreateCardParents < ActiveRecord::Migration[6.0]
  def change
    create_table :card_parents do |t|
      t.belongs_to :card, foreign_key: true
      t.belongs_to :parent, foreign_key: { to_table: :cards }

      t.timestamps
    end
  end
end
