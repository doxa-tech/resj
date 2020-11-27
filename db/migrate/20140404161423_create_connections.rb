class CreateConnections < ActiveRecord::Migration[4.2]
  def change
    create_table :connections do |t|
      t.string :ip
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
