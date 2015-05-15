class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
    	t.string :name

      t.timestamps null: false
    end
  end
end
