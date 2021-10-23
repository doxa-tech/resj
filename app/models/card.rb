class Card < ApplicationRecord

  attr_writer :tag_names
  attr_accessor :current_step

  enum card_type: [:youth, :adult, :activist, :organization, :network, :training]
  enum status: [:online, :pending, :incomplete, :change]

  belongs_to :location, optional: true # validation made manually according to the step
  belongs_to :user

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :card_parents, dependent: :destroy
  has_many :parents, through: :card_parents

  scope :online, -> { where(status: :online) }

  after_save :assign_tags

  with_options if: Proc.new { |c| c.current_step?("general")} do |c|
    c.validates :name, presence: true, length: { maximum: 30 }, uniqueness: { case_sensitive: false }
    c.validates :description, presence: true, length: { maximum: 800 }
    c.validates :card_type, presence: true
  end
  with_options if: Proc.new { |c| c.current_step?("location")} do |c|
    c.validates :street, presence: true
    c.validates :location, presence: true
    c.validates :place, length: { maximum: 60 }
    c.validate :coordinates_are_both_set
  end
  with_options if: Proc.new { |c| c.current_step?("extra")} do |c|
    c.validates :website, length: { maximum: 60 }
    c.validates :email, length: { maximum: 60 },  format: { with: /@/ }, allow_blank: true
    c.validates :affiliation, length: { maximum: 60 }
  end

  def tag_names
    @tag_names ||= self.tags.map(&:name).join(', ')
  end

  def current_step?(step)
    current_step.nil? || current_step == step
  end

  def coordinates_are_both_set
      if latitude.nil? || longitude.nil? 
        errors.add(:base, "Veuillez spécifier votre emplacement sur la carte")
      end
  end

  def color
    case card_type
    when "youth" 
      "255,0,0"
    when "adult"
      "0,255,0"
    else 
      "128,128,128"
    end
  end

  # used in cards#show to display the card on map
  def to_map_feature
    return {
      type: "feature",
      geometry: {
        type: "point",
        coordinates: [self.longitude, self.latitude]
      },
      properties: {
        id: self.id,
        name: self.name,
        type: I18n.t("card.card_types.#{self.card_type}"),
        description: self.description.truncate(180),
        href: Rails.application.routes.url_helpers.card_path(self)
      }
    }.to_json
  end

  private

  def assign_tags
    # popularity is increased every time the card is updated
    self.tags = tag_names.split(',').map do |tag|
      tag = tag.strip.downcase
      tag = Tag.where(name: tag).first_or_create!
      tag.update_column(:popularity, tag.popularity + 1)
      tag
    end
  end

end
