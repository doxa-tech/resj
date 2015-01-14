class CardAffiliation < ActiveRecord::Base
  belongs_to :card
  belongs_to :affiliation
end
