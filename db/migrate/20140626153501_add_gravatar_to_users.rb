class AddGravatarToUsers < ActiveRecord::Migration
  def change
    add_column :users, :gravatar, :boolean
  end
end
