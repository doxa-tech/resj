class Canton < ActiveRecord::Base
  include TireAssociations

	has_many :locations

  after_save { |m| m.saving_reindex(Card) }
  after_destroy { |m| m.destroying_reindex(Card) }
end
