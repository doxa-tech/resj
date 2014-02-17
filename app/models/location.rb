class Location < ActiveRecord::Base
  belongs_to :canton

  def full_name
  	"#{official_name} #{post_name}"
  end
end
