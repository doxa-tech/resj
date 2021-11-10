class AddLastUpdatedToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :last_updated, :datetime
  end
end
