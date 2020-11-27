class CreateAccessTokens < ActiveRecord::Migration[4.2]
  def change
    create_table :access_tokens do |t|
      t.string :token
      t.boolean :valid
      t.belongs_to :ownership, index: true

      t.timestamps null: false
    end
  end
end
