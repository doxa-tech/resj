class Permission

	def initialize(user)
		@user = user
		@ids = user.parents.pluck(:parent_id) << user.id if user
	end

	def allow_modify?(controller, action, current_resource = nil)
		right_to = right[action] || "right_update"
		@modify_ownerships = Ownership.permission.where("user_id IN (?) AND elements.name = ? AND #{right_to} = ?", @ids, controller, true)
		allow?(@modify_ownerships, current_resource)
	end

	def allow_create?(controller, *args)
		@create_ownerships ||= Ownership.joins(:element).where(user_id: @ids, right_create: true, elements: {name: controller})
    @create_ownerships.any?
	end

	def allow_read?(controller, *args)
		@read_ownerships ||= Ownership.joins(:element).where(user_id: @ids, right_read: true, elements: {name: controller})
    @read_ownerships.any?
	end

	def records(controller, model, token=nil)
		ownerships, ids = index_ownerships(controller, token)
		@records ||= if ownerships.any? { |o| o.ownership_type.name == "all_entries" }
			model.all
		elsif ownerships.any? { |o| o.ownership_type.name == "on_ownership" }
			model.where('user_id = ? or id IN (?)', @user.id, ids)
		elsif ownerships.any? { |o| o.ownership_type.name == "on_entry" }
			model.where('id IN (?)', ids)
		else
			model.none
		end
	end

  def index_ownerships(controller, token=nil)
    @index_ownerships ||= Ownership.permission.where(user_id: @ids, right_read: true, elements: {name: controller})
    if !(@index_token ||= AccessToken.find_by_token token).nil? && @index_token.is_valid?
      @index_ownerships << @index_token.ownership
    end
    @index_ids ||= @index_ownerships.pluck(:id_element)
    return @index_ownerships, @index_ids
  end

  def allow_action?(controller, action, current_resource = nil)
  	@action_ownerships = Ownership.permission.joins(:actions).where(user_id: @ids, elements: {name: controller}, actions: {name: action})
		@action_ownerships.any?
		allow?(@action_ownerships, current_resource)
  end

  def allow_token?(controller, action, token, current_resource = nil)
  	token = AccessToken.find_by_token(token)
  	right_to = right[action] || "right_update"
  	@token_ownerships ||= Ownership.permission.where("ownerships.id = ? AND elements.name = ? AND #{right_to} = ?", token.try(:ownership_id), controller, true)
  	!token.nil? && token.is_valid? && allow?(@token_ownerships, current_resource)
  end

  def allow_resource?
  	@user.confirmed_cards.select{ |c| c.status.name == "En ligne"}.any? || !@user.orator.nil? if @user
  end

  def allow_params?(controller, name)
  	@params_ownerships ||= Ownership.joins(:actions, :element).where(user_id: @ids, elements: {name: controller}, actions: {name: name})
    @params_ownerships.any?
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
