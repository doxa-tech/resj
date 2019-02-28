class CardParent < ApplicationRecord
  belongs_to :card
  belongs_to :parent
end
