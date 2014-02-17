class Action < ActiveRecord::Base
	has_many :ownership_actions, dependent: :destroy
	has_many :ownerships, through: :ownership_actions

	validates :name, presence: true, length: { maximum: 15 }
end
