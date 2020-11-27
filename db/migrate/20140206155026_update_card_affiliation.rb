class UpdateCardAffiliation < ActiveRecord::Migration[4.2]
  def change
  	rename_column :cards, :affiliations, :affiliation
  end
end
