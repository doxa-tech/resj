class RemoveValidationFromCards < ActiveRecord::Migration[4.2]
  def change
  	change_table(:cards) do |t|
  		t.references :status
  		t.remove :validated
  		t.remove :visible
  	end
  end
end
