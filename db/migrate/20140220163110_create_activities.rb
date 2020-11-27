class CreateActivities < ActiveRecord::Migration[4.2]
  def change
    create_table :activities do |t|
      t.belongs_to :user, index: true
      t.string :action
      t.belongs_to :trackable, index: true
      t.string :trackable_type

      t.timestamps null: false
    end
  end
end
