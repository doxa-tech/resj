class RemoveValidationFromCards < ActiveRecord::Migration
  def change
  	change_table(:cards) do |t|
  		t.references :status
  		t.remove :validated
  		t.remove :visible
  	end
  end
end
