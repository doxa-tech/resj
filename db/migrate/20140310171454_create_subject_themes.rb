class CreateSubjectThemes < ActiveRecord::Migration[4.2]
  def change
    create_table :subject_themes do |t|
      t.belongs_to :subject, index: true
      t.belongs_to :theme, index: true

      t.timestamps null: false
    end
  end
end
