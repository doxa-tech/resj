class OratorTheme < ActiveRecord::Base
  belongs_to :orator, touch: true
  belongs_to :theme
end
