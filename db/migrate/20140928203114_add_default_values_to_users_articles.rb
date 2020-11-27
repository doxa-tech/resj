class AddDefaultValuesToUsersArticles < ActiveRecord::Migration[4.2]
  def change
  	change_column :users, :gravatar, :boolean, :default => true
  	change_column :articles, :likes, :integer, :default => 0
  end
end
