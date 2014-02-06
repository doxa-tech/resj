class UpdateCardAffiliation < ActiveRecord::Migration
  def change
  	rename_column :cards, :affiliations, :affiliation
  end
end
