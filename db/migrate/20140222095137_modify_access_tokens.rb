class ModifyAccessTokens < ActiveRecord::Migration[4.2]
  def change
  	rename_column :access_tokens, :valid, :is_valid
  end
end
