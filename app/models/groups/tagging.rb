class Tagging < ApplicationRecord
  belongs_to :card, touch: true
  belongs_to :tag
end
