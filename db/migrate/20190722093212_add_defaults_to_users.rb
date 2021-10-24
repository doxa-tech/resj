class AddDefaultsToUsers < ActiveRecord::Migration[6.0]
  def change
    change_column_default :users, :confirmed, from: nil, to: false
    change_column_default :users, :gravatar, from: nil, to: true
  end
end