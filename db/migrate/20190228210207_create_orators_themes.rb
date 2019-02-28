class CreateOratorsThemes < ActiveRecord::Migration[6.0]
  def change
    create_table :orators_themes do |t|
      create_table :orators_themes, id: false do |t|
        t.belongs_to :orator, index: true
        t.belongs_to :theme, index: true
      end
    end
  end
end
