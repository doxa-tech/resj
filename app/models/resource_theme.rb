class ResourceTheme < ActiveRecord::Base
  belongs_to :resource
  belongs_to :theme
end
