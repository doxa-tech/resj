class HelpPage < ApplicationRecord
  belongs_to :category, class_name: HelpCategory, foreign_key: "help_category_id"

  validates :name, presence: true, length: { maximum: 60 }
  validates :content, presence: true
  validates :help_category_id, presence: true

  def to_param
    "#{id}-#{name}".parameterize
  end
end
