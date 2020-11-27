class RemoveCardIdFromCards < ActiveRecord::Migration[4.2]
  def change
  	remove_column :cards, :card_id, :integer
  end
end
