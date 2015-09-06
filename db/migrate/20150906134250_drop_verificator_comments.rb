class DropVerificatorComments < ActiveRecord::Migration
  def change
    drop_table :verificator_comments
  end
end
