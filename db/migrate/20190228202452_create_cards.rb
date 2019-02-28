class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :card_type
      t.string :email
      t.string :street
      t.string :place
      t.string :website
      t.text :description
      t.string :affiliation
      t.float :latitude
      t.float :longitude
      t.string :avatar
      t.string :banner
      t.belongs_to :location, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.integer :status

      t.timestamps
    end
  end
end
