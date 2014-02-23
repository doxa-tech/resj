class ModifyAccessTokens < ActiveRecord::Migration
  def change
  	rename_column :access_tokens, :valid, :is_valid
  end
end
