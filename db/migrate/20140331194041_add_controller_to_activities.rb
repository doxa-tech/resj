class AddControllerToActivities < ActiveRecord::Migration[4.2]
  def change
    add_column :activities, :controller, :string
  end
end
