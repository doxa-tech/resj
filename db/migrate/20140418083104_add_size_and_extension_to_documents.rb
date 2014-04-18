class AddSizeAndExtensionToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :size, :integer
    add_column :documents, :extension, :string
  end
end
