class Card < ApplicationRecord

  attr_writer :tag_names

  enum card_type: [:youth, :adult, :activist, :organization, :network, :training]
  enum status: [:online, :pending, :incomplete, :change]

  belongs_to :location, optional: true # validation made manually according to the step
  belongs_to :user

  has_many :taggings
  has_many :tags, through: :taggings

  has_many :card_parents
  has_many :parents, through: :card_parents

  after_save :assign_tags

  validates :description, presence: true

  def tag_names
    @tag_names ||= self.tags.map(&:name).join(', ')
  end

  private

  def assign_tags
    self.tags = tag_names.split(',').map do |tag|
      tag = tag.strip.downcase
      tag = Tag.where(name: tag).first_or_create!
      tag.update_column(:popularity, tag.popularity + 1)
      tag
    end
  end

end
