class AddImagesToCards < ActiveRecord::Migration
  def change
  	add_column :cards, :avatar, :string
  	add_column :cards, :banner, :string
  	add_column :cards, :card_id, :integer, index: true
  end
end
