class RemoveResponsableFromCard < ActiveRecord::Migration
  def change
  	remove_column :cards, :responsable_id
  end
end
