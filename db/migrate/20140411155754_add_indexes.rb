class AddIndexes < ActiveRecord::Migration
  def change
  	add_index :users, :remember_token
  	add_index :access_tokens, :token
  	add_index :locations, :official_name
  	add_index :locations, :post_name
  	add_index :tags, :name
  end
end
