class Theme < ActiveRecord::Base

	has_many :orator_themes, dependent: :destroy
	has_many :orators, through: :orator_themes

	has_many :article_themes, dependent: :destroy
	has_many :articles, through: :article_themes

	has_many :subject_themes, dependent: :destroy
	has_many :subjects, through: :subject_themes

	validates :name, presence: true, length: { maximum: 30 }, uniqueness: true

	after_save :saving_reindex
  after_destroy :destroying_reindex

  private

  def saving_reindex
		Sunspot.index(orators)
		Sunspot.index(subjects)
  end

  def destroying_reindex
  	Orator.reindex
  	Subject.reindex
  end
end
