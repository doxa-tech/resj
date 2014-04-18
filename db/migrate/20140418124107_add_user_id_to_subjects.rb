class AddUserIdToSubjects < ActiveRecord::Migration
  def change
    add_column :subjects, :user_id, :integer, index: true
  end
end
