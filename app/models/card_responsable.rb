class CardResponsable < ActiveRecord::Base
  belongs_to :card
  belongs_to :responsable
end
