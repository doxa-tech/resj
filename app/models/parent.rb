class Parent < ActiveRecord::Base
	belongs_to :user
	belongs_to :parent, class_name: User
end
