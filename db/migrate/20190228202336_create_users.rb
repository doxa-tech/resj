class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :password_digest
      t.string :remember_token
      t.string :uuid
      t.string :reset_token
      t.datetime :reset_sent_at
      t.boolean :confirmed
      t.string :avatar
      t.string :gravatar_email
      t.boolean :gravatar
      t.boolean :newsletter, default: true

      t.timestamps
    end
  end
end
