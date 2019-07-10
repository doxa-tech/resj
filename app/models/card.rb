class Card < ApplicationRecord

  attr_reader :tag_names

  enum card_type: [:youth, :adult, :activist, :organization, :network, :training]
  enum status: [:online, :pending, :incomplete, :change]

  belongs_to :location
  belongs_to :user

  has_many :taggings
  has_many :tags, through: :taggings

  has_many :card_parents
  has_many :parents, through: :card_parents
end
