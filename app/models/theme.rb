class Theme < ApplicationRecord
	has_many :orator_themes, dependent: :destroy
	has_many :orators, through: :orator_themes

	has_many :article_themes, dependent: :destroy
	has_many :articles, through: :article_themes

	has_many :subject_themes, dependent: :destroy
	has_many :subjects, through: :subject_themes

	validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

  after_update { (self.orator_themes + self.subject_themes).each(&:touch) }
end
