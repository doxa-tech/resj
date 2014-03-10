class Subject < ActiveRecord::Base
	has_many :resources
	has_many :subject_themes
	has_many :themes, through: :subject_themes

	validates :name, presence: true, length: { maximum: 30 }

	accepts_nested_attributes_for :resources, allow_destroy: true,  reject_if: proc { |a| a[:name].blank? && a[:file].blank? }
end
