class CreateDisponibilities < ActiveRecord::Migration
  def change
    create_table :disponibilities do |t|
      t.string :name

      t.timestamps
    end
  end
end
