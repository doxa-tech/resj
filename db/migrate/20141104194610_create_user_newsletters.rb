class CreateUserNewsletters < ActiveRecord::Migration
  def change
    create_table :user_newsletters do |t|
      t.belongs_to :user, index: true
      t.belongs_to :newsletter, index: true

      t.timestamps
    end
  end
end
