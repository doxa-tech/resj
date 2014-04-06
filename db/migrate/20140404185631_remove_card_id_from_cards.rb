class RemoveCardIdFromCards < ActiveRecord::Migration
  def change
  	remove_column :cards, :card_id, :integer
  end
end
