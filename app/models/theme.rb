class Theme < ActiveRecord::Base

	has_many :orator_themes
	has_many :orators, through: :orator_themes

	validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
end
