class CreateArticleThemes < ActiveRecord::Migration
  def change
    create_table :article_themes do |t|
      t.belongs_to :article, index: true
      t.belongs_to :theme, index: true

      t.timestamps
    end
  end
end
