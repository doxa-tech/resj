class CardAffiliation < ApplicationRecord
  belongs_to :card
  belongs_to :affiliation
end
