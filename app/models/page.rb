class Page < ActiveRecord::Base

	validates :content, presence: true
	
end
