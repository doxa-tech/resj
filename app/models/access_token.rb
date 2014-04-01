class AccessToken < ActiveRecord::Base
  belongs_to :ownership

  validates :ownership_id, presence: true
  validates :exp_at, presence: true
end
