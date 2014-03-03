class Theme < ActiveRecord::Base

	has_many :orator_themes
	has_many :orators, through: :orator_themes

	validates :name, presence: true, length: { maximum: 15 }, uniqueness: true
end
