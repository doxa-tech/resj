class CreateSubjectThemes < ActiveRecord::Migration
  def change
    create_table :subject_themes do |t|
      t.belongs_to :subject, index: true
      t.belongs_to :theme, index: true

      t.timestamps
    end
  end
end
