class PermissionAccess < SimpleDelegator

  def initialize(parent, controller, action, current_resource)
    super(parent)
    @token = stored_token
    @controller = controller
    @action = action
    @current_user ||= User.new(firstname: "Guest")
    store_location
  end

  def authorized?(action)
    current_permission.allow_token?(@controller, @action, @token, @current_resource) ||
    (current_user && current_permission.send("allow_#{action}?", @controller, @action, @current_resource))
  end

  def authorize(action)
    redirect_to connexion_path unless authorized?(action)
  end

  def authorize_resource
    if !authorized?(:read) && !current_permission.allow_resource?
      if !current_user
        redirect_to connexion_path, infos: render_error('resources_login')
      else
        redirect_to resources_path, infos: render_error('resources_unlinked_account')
      end
    end
  end

  def authorize_index
    ownerships, ids = current_permission.index_ownerships(@controller, @token)
    redirect_to connexion_path unless ownerships.any?
  end

  def stored_token
    session[:token] = params[:token] if params[:token]
    return session[:token]
  end

end