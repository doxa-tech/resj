class CreatePages < ActiveRecord::Migration[4.2]
  def change
    create_table :pages do |t|
      t.string :name
      t.text :content

      t.timestamps null: false
    end
  end
end
