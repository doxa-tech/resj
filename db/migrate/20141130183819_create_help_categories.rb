class CreateHelpCategories < ActiveRecord::Migration
  def change
    create_table :help_categories do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
