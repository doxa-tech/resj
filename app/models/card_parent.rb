class CardParent < ActiveRecord::Base
  belongs_to :card
  belongs_to :parent, class_name: Card
end
