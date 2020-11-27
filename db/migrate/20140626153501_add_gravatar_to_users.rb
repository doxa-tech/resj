class AddGravatarToUsers < ActiveRecord::Migration[4.2]
  def change
    add_column :users, :gravatar, :boolean
  end
end
