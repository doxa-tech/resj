class CreateOratorThemes < ActiveRecord::Migration
  def change
    create_table :orator_themes do |t|
      t.belongs_to :orator, index: true
      t.belongs_to :theme, index: true

      t.timestamps
    end
  end
end
