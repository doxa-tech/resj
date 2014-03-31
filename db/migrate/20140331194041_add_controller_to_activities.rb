class AddControllerToActivities < ActiveRecord::Migration
  def change
    add_column :activities, :controller, :string
  end
end
