class Ownership < ActiveRecord::Base
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
    new_actions = []
    actions.reject{ |r| r._destroy == true}.each do |action|
      new_actions << Action.where(name: action.name).first_or_create
    end
    self.actions = new_actions
  end

  searchable do
    text :element_name
    text :user_name    
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
end
