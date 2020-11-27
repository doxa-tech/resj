class CreateUsers < ActiveRecord::Migration[4.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :gravatar_email
      t.string :password_digest
      t.string :remember_token
      t.belongs_to :user_type, index: true
      t.string :uid

      t.timestamps null: false
    end
  end
end
