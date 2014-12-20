class Theme < ActiveRecord::Base
  include TireAssociations

	has_many :orator_themes, dependent: :destroy
	has_many :orators, through: :orator_themes

	has_many :article_themes, dependent: :destroy
	has_many :articles, through: :article_themes

	has_many :subject_themes, dependent: :destroy
	has_many :subjects, through: :subject_themes

	validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

  after_save { |m| m.saving_reindex(Orator, orators) }
  after_destroy { |m| m.destroying_reindex(Orator) }
end
