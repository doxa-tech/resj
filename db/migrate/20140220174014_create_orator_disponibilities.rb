class CreateOratorDisponibilities < ActiveRecord::Migration
  def change
    create_table :orator_disponibilities do |t|
      t.belongs_to :orator, index: true
      t.belongs_to :disponibility, index: true

      t.timestamps
    end
  end
end