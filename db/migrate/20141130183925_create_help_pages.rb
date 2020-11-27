class CreateHelpPages < ActiveRecord::Migration[4.2]
  def change
    create_table :help_pages do |t|
      t.string :name
      t.text :content
      t.belongs_to :help_category

      t.timestamps null: false
    end
  end
end
