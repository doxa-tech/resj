class CardResponsable < ApplicationRecord
  belongs_to :card
  belongs_to :responsable
end
