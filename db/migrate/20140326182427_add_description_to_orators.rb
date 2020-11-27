class AddDescriptionToOrators < ActiveRecord::Migration[4.2]
  def change
  	add_column :orators, :description, :text
  	add_column :orators, :disabled, :boolean, default: false
  end
end
