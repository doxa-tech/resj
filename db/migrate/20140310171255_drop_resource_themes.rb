class DropResourceThemes < ActiveRecord::Migration
  def change
  	drop_table :resource_themes
  	add_column :resources, :subject_id, :integer, index: true
  end
end
