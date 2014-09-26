class Subject < ActiveRecord::Base
	has_many :documents, dependent: :destroy
	has_many :subject_themes
	has_many :themes, through: :subject_themes
	belongs_to :user

	validates :name, presence: true, length: { maximum: 50 }
	validates :description, presence: true
	validates :themes, presence: true

	accepts_nested_attributes_for :documents, allow_destroy: true, reject_if: proc { |a| a[:name].blank? && a[:file].blank? }

	searchable do
    text :name, boost: 10
    text :description, boost: 5
    text :theme_names
    integer :themes_ids, multiple: true
  end

	def to_param
    "#{id}-#{name}".parameterize
  end

  def themes_ids
    themes.pluck(:id)
  end

  def theme_names
    themes.pluck(:name)
  end

end
