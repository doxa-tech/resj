class AddValidityToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :validity, :integer, default: 0
  end
end
