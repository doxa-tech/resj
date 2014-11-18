class Newsletter < ActiveRecord::Base

	has_many :user_newsletters
	has_many :users, through: :user_newsletters
end
