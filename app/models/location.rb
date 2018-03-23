class Location < ApplicationRecord
  belongs_to :canton
  has_many :cards

  after_update { self.cards.each(&:touch) }

  def full_name
  	"#{official_name} - #{post_name} - #{npa} - #{canton.name}"
  end

  def map_name
  	"#{npa} #{post_name} #{canton.name} Switzerland"
  end
end
