class CreateOratorThemes < ActiveRecord::Migration[4.2]
  def change
    create_table :orator_themes do |t|
      t.belongs_to :orator, index: true
      t.belongs_to :theme, index: true

      t.timestamps null: false
    end
  end
end
