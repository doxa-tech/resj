class OwnershipAction < ApplicationRecord
	belongs_to :ownership
	belongs_to :action
end
