class DropResourceThemes < ActiveRecord::Migration
  def change
  	drop_table :resource_themes
  	add_column :documents, :subject_id, :integer, index: true
  end
end
