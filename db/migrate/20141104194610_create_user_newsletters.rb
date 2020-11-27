class CreateUserNewsletters < ActiveRecord::Migration[4.2]
  def change
    create_table :user_newsletters do |t|
      t.belongs_to :user, index: true
      t.belongs_to :newsletter, index: true

      t.timestamps null: false
    end
  end
end
