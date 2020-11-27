class CreateHelpCategories < ActiveRecord::Migration[4.2]
  def change
    create_table :help_categories do |t|
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
