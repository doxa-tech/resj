class CreateHelpPages < ActiveRecord::Migration
  def change
    create_table :help_pages do |t|
      t.string :name
      t.text :content
      t.belongs_to :help_category

      t.timestamps
    end
  end
end
