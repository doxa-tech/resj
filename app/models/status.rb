class Status < ActiveRecord::Base
	has_many :cards

	validates :name, presence: true, length: { maximum: 30 }
end
