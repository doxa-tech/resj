class CreateResponsables < ActiveRecord::Migration
  def change
    create_table :responsables do |t|
      t.string :firstname
      t.string :lastname
      t.string :email

      t.timestamps null: false
    end
  end
end
