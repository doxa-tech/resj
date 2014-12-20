class Subject < ActiveRecord::Base
  include SubjectSearch

	has_many :documents, dependent: :destroy
	has_many :subject_themes
	has_many :themes, through: :subject_themes
	belongs_to :user

	validates :name, presence: true, length: { maximum: 50 }
	validates :description, presence: true
	validates :themes, presence: true
  validates :documents, presence: true

	accepts_nested_attributes_for :documents, allow_destroy: true, reject_if: proc { |a| a[:name].blank? && a[:file].blank? }

	def to_param
    "#{id}-#{name}".parameterize
  end

end
