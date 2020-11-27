class CreateCardAffiliations < ActiveRecord::Migration[4.2]
  def change
    create_table :card_affiliations do |t|
      t.belongs_to :card, index: true
      t.belongs_to :affiliation, index: true

      t.timestamps null: false
    end
  end
end
