class CardParent < ApplicationRecord
  belongs_to :card
  belongs_to :parent, class_name: "Card"
end
