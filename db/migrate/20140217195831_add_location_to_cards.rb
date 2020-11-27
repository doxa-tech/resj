class AddLocationToCards < ActiveRecord::Migration[4.2]
  def change
    add_reference :cards, :location, index: true
    remove_column :cards, :npa, :integer
    remove_column :cards, :city, :string
  end
end
