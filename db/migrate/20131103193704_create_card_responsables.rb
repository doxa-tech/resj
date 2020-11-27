class CreateCardResponsables < ActiveRecord::Migration[4.2]
  def change
    create_table :card_responsables do |t|
      t.belongs_to :card, index: true
      t.belongs_to :responsable, index: true

      t.timestamps null: false
    end
  end
end
