class DropCardVerificationsTable < ActiveRecord::Migration
  def change
  	drop_table :card_verifications
  end
end
