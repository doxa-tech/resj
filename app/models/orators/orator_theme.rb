class OratorTheme < ApplicationRecord
  belongs_to :orator, touch: true
  belongs_to :theme
end
