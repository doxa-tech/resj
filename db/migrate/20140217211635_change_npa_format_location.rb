class ChangeNpaFormatLocation < ActiveRecord::Migration[4.2]
  def change
  	change_column :locations, :npa, :integer
  end
end
