class Permission

	def initialize(user)
		@user = user
		user ? @ids ||= (user.parents.pluck(:parent_id) << user.id) : @ids = nil
		@all_entries_id ||= OwnershipType.find_by_name('all_entries').id
		@on_ownership_id ||= OwnershipType.find_by_name('on_ownership').id
		@on_entry_id ||= OwnershipType.find_by_name('on_entry').id
	end

	def allow_modify?(controller, action, current_resource = nil)
		if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND #{right[action]} = ?", @ids, element_id(controller), @all_entries_id, true).any?
			return true
		else
			if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND #{right[action]} = ?", @ids, element_id(controller), @on_ownership_id, true).any?
				return true if current_resource.try(:user_id) == @user.id
			end
			if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND #{right[action]} = ?", @ids, element_id(controller), @on_entry_id, true).pluck('id_element').include? current_resource.try(:id)
				return true
			end
		end
	end

	def allow_create?(controller)
		return true if Ownership.where("user_id IN (?) AND element_id = ? AND right_create = ?", @ids, element_id(controller), true).any?
	end

	def elements(controller, model)
		ownerships_on_entry = Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND right_read = ?", @ids, element_id(controller), @on_entry_id, true).pluck('id_element')
		if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND right_read = ?", @ids, element_id(controller), @all_entries_id, true).any?
    	@elements ||= model.all
    elsif Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND right_read = ?", @ids, element_id(controller), @on_ownership_id, true).any?
			@elements ||= model.where('user_id = ? or id IN (?)', user.id, ownerships_on_entry)
		elsif ownerships_on_entry.any?
			@elements ||= model.where('id IN (?)', ownerships_on_entry)
		else
			@elements ||= model.none
		end
  end

  def allow_action?(controller, action, current_resource = nil)
  	if Ownership.joins(:actions).where(user_id: @ids, element_id: element_id(controller), ownership_type_id: @all_entries_id, actions: {name: action}).any?
  		return true
  	else
  		if Ownership.joins(:actions).where(user_id: @ids, element_id: element_id(controller), ownership_type_id: @on_ownership_id, actions: {name: action}).any?
  			return true if current_resource.try(:user_id) == @user.id
  		end
			if Ownership.joins(:actions).where(user_id: @ids, element_id: element_id(controller), ownership_type_id: @on_entry_id, actions: {name: action}).pluck('id_element').include? current_resource.try(:id)
				return true
			end
		end
  end

  def allow_params?(controller, name)
  	return true if Ownership.joins(:actions).where(user_id: @ids, element_id: element_id(controller), actions: {name: name}).any?
  end

  def reject_params(controller, attributes, params)
  	params.each do |parameter|
  		if !allow_params?(controller, parameter)
  			attributes.reject { |a| a == parameter}
  		end
  	end
  	attributes
  end

  private

  def element_id(controller)
  	@element_id ||= Element.find_by_name(controller).id
  end

	def right
		{"show" => "right_read", "edit" => "right_update", "update" => "right_update", "destroy" => "right_delete"}
	end
end