class AddPhoneToOrators < ActiveRecord::Migration[6.0]
  def change
    add_column :orators, :phone, :string
  end
end
