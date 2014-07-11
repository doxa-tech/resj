class Theme < ActiveRecord::Base

	has_many :orator_themes, dependent: :destroy
	has_many :orators, through: :orator_themes

	has_many :article_themes, dependent: :destroy
	has_many :articles, through: :article_themes

	validates :name, presence: true, length: { maximum: 30 }, uniqueness: true
end
