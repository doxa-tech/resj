class SubjectTheme < ActiveRecord::Base
  belongs_to :subject
  belongs_to :theme
end
