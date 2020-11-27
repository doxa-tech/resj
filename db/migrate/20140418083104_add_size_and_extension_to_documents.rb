class AddSizeAndExtensionToDocuments < ActiveRecord::Migration[4.2]
  def change
    add_column :documents, :size, :integer
    add_column :documents, :extension, :string
  end
end
