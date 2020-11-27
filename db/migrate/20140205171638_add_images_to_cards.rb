class AddImagesToCards < ActiveRecord::Migration[4.2]
  def change
  	add_column :cards, :avatar, :string
  	add_column :cards, :banner, :string
  	add_column :cards, :card_id, :integer, index: true
  end
end
