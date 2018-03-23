class Parent < ApplicationRecord
	belongs_to :user
	belongs_to :parent, class_name: User

	validates :user_id, presence: true
	validates :parent_id, presence: true
end
