class PermissionAccess < SimpleDelegator

  def initialize(parent, controller, action, current_resource)
    super(parent)
    @token = stored_token
    @controller = controller
    @action = action
    @current_resource = current_resource
    @current_user ||= User.new(firstname: "Guest")
    store_location
  end

  def authorized?(action)
    current_permission.allow_token?(@controller, @action, @token, @current_resource) ||
    (current_user && current_permission.send("allow_#{action}?", @controller, @action, @current_resource))
  end

  def authorize(action)
    unless authorized?(action)
      respond_to do |f|
        f.all { head :unauthorized }
        f.html { redirect_to connexion_path, error: "Vous ne pouvez pas accéder à cette page" }
      end
    end
  end

  def authorize_resource
    if !authorized?(:read) && !current_permission.allow_resource?
      if !current_user
        respond_to do |f|
          f.all { head :forbidden }
          f.html { redirect_to connexion_path, infos: render_message('resources_login') }
        end
      else
        respond_to do |f|
          f.all { head :forbidden }
          f.html { redirect_to resources_path, infos: render_message('resources_unlinked_account') }
        end
      end
    end
  end

  def authorize_index
    ownerships, ids = current_permission.index_ownerships(@controller, @token)
    redirect_to connexion_path unless ownerships.any?
  end

  def stored_token
    cookies[:token] = params[:token] if params[:token]
    return cookies[:token]
  end

  def cookies
    request.cookie_jar
  end

end
