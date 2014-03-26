class AddDescriptionToOrators < ActiveRecord::Migration
  def change
  	add_column :orators, :description, :text
  	add_column :orators, :disabled, :boolean, default: false
  end
end
