class AddUserIdToSubjects < ActiveRecord::Migration[4.2]
  def change
    add_column :subjects, :user_id, :integer, index: true
  end
end
