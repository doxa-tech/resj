class Tagging < ActiveRecord::Base
  belongs_to :card, touch: true
  belongs_to :tag
end
