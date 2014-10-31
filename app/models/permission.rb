class Permission

	def initialize(user)
		@user = user
		@ids = user.parents.pluck(:parent_id) << user.id if user
	end

	def allow_modify?(controller, action, current_resource = nil)
		right_to = right[action] || "right_update"
		ownerships = Ownership.permission.where("user_id IN (?) AND elements.name = ? AND #{right_to} = ?", @ids, controller, true)
		allow?(ownerships, current_resource)
	end

	def allow_create?(controller)
		Ownership.joins(:element).where(user_id: @ids, right_create: true, elements: {name: controller}).any?
	end

	def allow_read?(controller)
		Ownership.joins(:element).where(user_id: @ids, right_read: true, elements: {name: controller}).any?
	end

	def records(controller, model, token=nil)
		ownerships = Ownership.permission.where(user_id: @ids, right_read: true, elements: {name: controller})
		token = AccessToken.find_by_token(token)
		ownerships << token.ownership if !token.nil? && token.exp_at > Time.now && token.is_valid
		id_elements = ownerships.pluck(:id_element)
		if ownerships.any?
			if ownerships.any? { |o| o.ownership_type.name == "all_entries" }
				@records ||= model.all
			elsif ownerships.any? { |o| o.ownership_type.name == "on_ownership" }
				@records ||= model.where('user_id = ? or id IN (?)', @user.id, id_elements)
			elsif ownerships.any? { |o| o.ownership_type.name == "on_entry" }
				@records ||= model.where('id IN (?)', id_elements)
			end
		else
			@records ||= model.none
		end
	end

  def allow_action?(controller, action, current_resource = nil)
  	ownerships = Ownership.permission.joins(:actions).where(user_id: @ids, elements: {name: controller}, actions: {name: action})
  	allow?(ownerships, current_resource)
  end

  def allow_token?(controller, action, token, current_resource = nil)
  	token = AccessToken.find_by_token(token)
  	right_to = right[action] || "right_update"
  	ownerships = Ownership.permission.where("ownerships.id = ? AND elements.name = ? AND #{right_to} = ?", token.try(:ownership_id), controller, true)
  	!token.nil? && token.exp_at > Time.now && token.is_valid && allow?(ownerships, current_resource)
  end

  def allow_resource?
  	@user.confirmed_cards.select{ |c| c.status.name == "En ligne"}.any? || !@user.orator.nil?
  end

  def allow_params?(controller, name)
  	Ownership.joins(:actions, :element).where(user_id: @ids, elements: {name: controller}, actions: {name: name}).any?
  end

  def reject_params(controller, attributes, params)
  	params.each do |parameter|
  		if !allow_params?(controller, parameter)
  			attributes.reject { |a| a == parameter}
  		end
  	end
  	attributes
  end

  def allow?(ownerships, current_resource)
  	(ownerships.any? { |o| o.ownership_type.name == "all_entries" }) ||
  	(ownerships.any? { |o| o.ownership_type.name == "on_ownership" } && current_resource.try(:user) == @user) ||
  	(ownerships.any? { |o| o.ownership_type.name == "on_entry" } && ownerships.pluck(:id_element).include?(current_resource.try(:id)))
  end

  private

	def right
		{index: 'right_read', new: 'right_create', create: 'right_create', show: 'right_read', edit: 'right_update', update: 'right_update', destroy: 'right_delete'}.stringify_keys!
	end
end