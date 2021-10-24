class CreateOratorsDisponibilities < ActiveRecord::Migration[6.0]
  def change
    create_table :disponibilities_orators do |t|
      t.belongs_to :orator, index: true
      t.belongs_to :disponibility, index: true
    end
  end
end
