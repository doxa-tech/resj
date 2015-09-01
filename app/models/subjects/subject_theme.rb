class SubjectTheme < ActiveRecord::Base
  belongs_to :subject, touch: true
  belongs_to :theme
end