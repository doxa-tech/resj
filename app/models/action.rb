class Action < ActiveRecord::Base
	has_many :ownership_actions, dependent: :destroy
	has_many :ownerships, through: :ownership_actions
end
