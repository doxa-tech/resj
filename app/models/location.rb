class Location < ActiveRecord::Base
  belongs_to :canton

  def full_name
  	"#{official_name} - #{post_name} - #{npa} - #{canton.name}"
  end

  def map_name
  	"#{npa} #{post_name} #{canton.name} Switzerland"
  end
end
