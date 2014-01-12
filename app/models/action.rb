class Action < ActiveRecord::Base
	has_many :ownership_actions
	has_many :ownerships, through: :ownership_actions
end
