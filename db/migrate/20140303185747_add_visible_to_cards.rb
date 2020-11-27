class AddVisibleToCards < ActiveRecord::Migration[4.2]
  def change
  	remove_column :cards, :responsable_id, :integer
  	add_column :cards, :user_id, :integer, index: true
  	add_column :cards, :visible, :boolean
  end
end
