class AddExpirationToTokens < ActiveRecord::Migration
  def change
  	add_column :access_tokens, :exp_at, :date
  end
end
