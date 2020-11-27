class CreateArticleThemes < ActiveRecord::Migration[4.2]
  def change
    create_table :article_themes do |t|
      t.belongs_to :article, index: true
      t.belongs_to :theme, index: true

      t.timestamps null: false
    end
  end
end
