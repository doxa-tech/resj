class CreateCards < ActiveRecord::Migration[4.2]
  def change
    create_table :cards do |t|
      t.belongs_to :card_type, index: true
      t.string :name
      t.belongs_to :responsable, index: true
      t.string :email
      t.string :street
      t.integer :npa
      t.string :city
      t.string :place
      t.string :website
      t.string :password_digest, index: true
      t.text :description
      t.text :affiliations
      t.boolean :validated, default: false

      t.timestamps null: false
    end
  end
end
