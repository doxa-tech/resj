class ChangeNpaFormatLocation < ActiveRecord::Migration
  def change
  	change_column :locations, :npa, :integer
  end
end
