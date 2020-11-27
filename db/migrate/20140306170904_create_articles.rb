class CreateArticles < ActiveRecord::Migration[4.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.belongs_to :user, index: true
      t.string :image
      t.integer :likes

      t.timestamps null: false
    end
  end
end
