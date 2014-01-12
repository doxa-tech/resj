class Ownership < ActiveRecord::Base
	belongs_to :element
	belongs_to :user
	belongs_to :onwership_type
	has_many :ownership_actions
	has_many :actions, through: :ownership_actions

	accepts_nested_attributes_for :actions

	def autosave_associated_records_for_actions
    actions.each do |action|
      if new_action = Action.where('name = ?', action.name).first
        self.actions << new_action
      else
        self.actions << action
      end
    end
  end
end
