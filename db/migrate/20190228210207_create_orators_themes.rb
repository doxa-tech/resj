class CreateOratorsThemes < ActiveRecord::Migration[6.0]
  def change
    create_table :themes_orators do |t|
      t.belongs_to :orator, index: true
      t.belongs_to :theme, index: true
    end
  end
end
