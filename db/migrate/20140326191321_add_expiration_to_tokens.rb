class AddExpirationToTokens < ActiveRecord::Migration[4.2]
  def change
  	add_column :access_tokens, :exp_at, :date
  end
end
