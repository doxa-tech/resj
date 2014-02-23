class AccessToken < ActiveRecord::Base
  belongs_to :ownership

  validates :ownership_id, presence: true
end
