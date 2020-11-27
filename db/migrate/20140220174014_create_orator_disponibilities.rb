class CreateOratorDisponibilities < ActiveRecord::Migration[4.2]
  def change
    create_table :orator_disponibilities do |t|
      t.belongs_to :orator, index: true
      t.belongs_to :disponibility, index: true

      t.timestamps null: false
    end
  end
end
