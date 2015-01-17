class Ownership < ActiveRecord::Base
  include AutosaveAssociatedRecords
  scope :permission, -> { includes(:ownership_type).joins(:element) }

	belongs_to :element
	belongs_to :user
	belongs_to :ownership_type
	has_many :ownership_actions, dependent: :destroy
	has_many :actions, through: :ownership_actions
  has_many :access_tokens

	accepts_nested_attributes_for :actions, allow_destroy: true, reject_if: proc { |attributes| attributes['name'].blank? }

  validates :user_id, presence: true
  validates :element_id, presence: true
  validates :ownership_type_id, presence: true

	def autosave_associated_records_for_actions
    self.actions = find_or_create_related(Action, actions)
  end

  def element_name
    element.name
  end

  def user_name
    user.full_name
  end

  def full_name
    "#{id} - #{element.name} - R:#{right_read} - C:#{right_create}- U:#{right_update} - D:#{right_delete} - #{id_element} - #{actions.to_a}"
  end

  def self.create_or_destroy_by(boolean, **attributes)
    ownerships = Ownership.search(attributes)
    if boolean && !ownerships.any?
      ownerships.first_or_create! do |o|
        o.element = Element.find_by_name(attributes[:element])
        o.ownership_type = OwnershipType.find_by_name(attributes[:type])
      end
    elsif !boolean
      ownerships.destroy_all
    end
  end

  def self.search(**attributes)
    conditions = attributes.except(:element, :type)
    self.joins(:element, :ownership_type).where(elements: { name: attributes[:element] }, ownership_types: { name: attributes[:type] }, **conditions)
  end

  def self.add(**attributes)
    attributes[:element] = Element.find_by_name(attributes[:element])
    attributes[:ownership_type] = OwnershipType.find_by_name(attributes[:type])
    attributes.except!(:type)
    self.create(**attributes)
  end

end
