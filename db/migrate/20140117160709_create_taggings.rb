class CreateTaggings < ActiveRecord::Migration[4.2]
  def change
    create_table :taggings do |t|
      t.belongs_to :card, index: true
      t.belongs_to :tag, index: true

      t.timestamps null: false
    end
  end
end
