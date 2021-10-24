class AddPhoneToOrators < ActiveRecord::Migration[6.0]
  def change
    add_column :orators, :phone, :string
    change_column_default :orators, :disabled, from: nil, to: false
  end
end
