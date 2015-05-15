class CreateCardVerifications < ActiveRecord::Migration
  def change
    create_table :card_verifications do |t|
      t.belongs_to :card, index: true
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
