class OwnershipAction < ActiveRecord::Base

	belongs_to :ownership
	belongs_to :action
end
