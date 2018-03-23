class HelpCategory < ApplicationRecord
  has_many :pages, class_name: HelpPage

  def to_param
    "#{id}-#{name}".parameterize
  end
end
