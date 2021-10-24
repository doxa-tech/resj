class Canton < ApplicationRecord

  has_many :locations

  scope :romand, -> { where(name: ["Vaud", "Fribourg", "Genève", "Neuchâtel", "Berne"])}

end
