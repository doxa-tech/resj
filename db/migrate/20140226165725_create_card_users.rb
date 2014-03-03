class CreateCardUsers < ActiveRecord::Migration
  def change
    create_table :card_users do |t|
      t.belongs_to :card, index: true
      t.belongs_to :user, index: true
      t.boolean :user_validated
      t.boolean :card_validated

      t.timestamps
    end
  end
end
