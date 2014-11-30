class HelpPage < ActiveRecord::Base
  belongs_to :category, class_name: HelpCategory, foreign_key: "help_category_id"

  def to_param
    "#{id}-#{name}".parameterize
  end
end
