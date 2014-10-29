class Permission

	def initialize(user)
		@user = user
		@ids ||= user.parents.pluck(:parent_id) << user.id if user
		@all_entries_id ||= OwnershipType.find_by_name('all_entries').id
		@on_ownership_id ||= OwnershipType.find_by_name('on_ownership').id
		@on_entry_id ||= OwnershipType.find_by_name('on_entry').id
	end

	def allow_modify?(controller, action, current_resource = nil)
		right_to = right[action] || "right_update"
		if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND #{right_to} = ?", @ids, element_id(controller), @all_entries_id, true).any?
			return true
		else
			if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND #{right_to} = ?", @ids, element_id(controller), @on_ownership_id, true).any?
				return true if current_resource.try(:user_id) == @user.id
			end
			if Ownership.where("user_id IN (?) AND element_id = ? AND ownership_type_id = ? AND #{right_to} = ?", @ids, element_id(controller), @on_entry_id, true).pluck('id_element').include? current_resource.try(:id)
				return true
			end
		end
	end

	def allow_create?(controller)
		return true if Ownership.where("user_id IN (?) AND element_id = ? AND right_create = ?", @ids, element_id(controller), true).any?
	end

	def allow_read?(controller)
		return true if Ownership.where("user_id IN (?) AND element_id = ? AND right_read = ?", @ids, element_id(controller), true).any?
	end

	def records(controller, model, token)
		token = AccessToken.find_by_token(token)
		token_ownership_type_id = token.ownership.ownership_type_id if !token.nil? && token.exp_at > Time.now && token.is_valid
		ownership_type_ids = Ownership.where("user_id IN (?) AND element_id = ? AND right_read = ?", @ids, element_id(controller), true).pluck(:ownership_type_id) << token_ownership_type_id
		if ownership_type_ids.any?
			if ownership_type_ids.include? @all_entries_id
				@elements ||= model.all
			elsif ownership_type_ids.include? @on_ownership_id
				@elements ||= model.where('user_id = ? or id IN (?)', user.id, ownership.pluck(:id_element))
			elsif ownership_type_ids.include? @on_entry_id
				@elements ||= model.where('id IN (?)', ownership.pluck(:id_element))
			end
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

  def allow_token?(controller, action, token, current_resource = nil)
  	token = AccessToken.find_by_token(token)
  	if !token.nil? && token.exp_at > Time.now && token.is_valid && token.ownership.element.name == controller && (token.ownership[right[action]] == true || token.ownership.actions.pluck(:name).include?(action))
  		return true if token.ownership.ownership_type_id == @all_entries_id
  		return true if token.ownership.ownership_type_id == @on_ownership_id && current_resource.try(:user_id) == @user.try(:id)
  		return true if token.ownership.ownership_type_id == @on_entry_id && token.ownership.id_element == current_resource.try(:id)
  	end
  end

  def allow_resource?
  	return true if @user.confirmed_cards.select{ |c| c.status.name == "En ligne"}.any? || !@user.orator.nil?
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
		{"index" => "right_read", "new" => "right_create", "create" => "right_create", "show" => "right_read", "edit" => "right_update", "update" => "right_update", "destroy" => "right_delete"}
	end
end