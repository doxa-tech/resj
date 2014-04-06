class CreateConnections < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      t.string :ip
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
