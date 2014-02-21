class CreateOrators < ActiveRecord::Migration
  def change
    create_table :orators do |t|
      t.belongs_to :user, index: true
      t.string :street
      t.belongs_to :location, index: true
      t.string :phone
      t.string :disponibility

      t.timestamps
    end
  end
end
