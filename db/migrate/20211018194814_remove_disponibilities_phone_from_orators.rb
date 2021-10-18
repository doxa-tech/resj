class RemoveDisponibilitiesPhoneFromOrators < ActiveRecord::Migration[6.0]
  def change
    remove_column :orators, :phone
    drop_table :disponibilities_orators
    drop_table :disponibilities
  end
end
