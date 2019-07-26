class Location < ApplicationRecord

  belongs_to :canton
  has_many :cards
  has_many :orators

  def full_name
  	"#{official_name} - #{post_name} - #{zip} - #{canton.name}"
  end

end
