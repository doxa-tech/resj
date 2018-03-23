class SubjectTheme < ApplicationRecord
  belongs_to :subject, touch: true
  belongs_to :theme
end
