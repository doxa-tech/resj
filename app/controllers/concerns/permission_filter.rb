module PermissionFilter
	extend ActiveSupport::Concern

	included do
    helper_method :current_permission
  end

	def current_permission
		@current_permission ||= Permission.new(current_user)
	end

	def connected_or_token?
    
    if current_permission.allow_token?(params[:controller], params[:action], session[:token], current_resource) || current_user
      @current_user ||= User.new(firstname: "Guest")
    else
      store_location
      redirect_to connexion_path, error: render_error('login')
    end
    session[:token] = params[:token]
    if !current_user && !current_permission.allow_token?(params[:controller], params[:action], session[:token], current_resource)
      store_location
      redirect_to connexion_path, error: render_error('login')
    else
      @current_user ||= User.new(firstname: "Guest")
    end
  end

  def authorize_create
    if !current_permission.allow_create?(params[:controller]) \
    && !current_permission.allow_token?(params[:controller], params[:action], session[:token], current_resource)
      redirect_to root_path, error: "Vous n'avez pas les droits pour créer cette ressource."
    end
  end

  def authorize_modify
    if !current_permission.allow_modify?(params[:controller], params[:action], current_resource) \
    && !current_permission.allow_token?(params[:controller], params[:action], session[:token], current_resource)
      redirect_to root_path, error: "Vous n'avez pas les droits pour éditer cette ressource."
    end
  end

  def authorize_action
    if !current_permission.allow_action?(params[:controller], params[:action], current_resource) \
    && !current_permission.allow_token?(params[:controller], params[:action], session[:token], current_resource)
      redirect_to root_path, error: "Vous n'avez pas les droits pour accéder à cette page."
    end
  end

  def authorize_resource
    if !current_permission.allow_token?('resources', 'index', session[:token])
      if !current_user
        store_location
        redirect_to connexion_path, infos: render_error('resources_login')
      elsif !current_permission.allow_resource? && !current_permission.allow_read?('resources')
        store_location
        redirect_to resources_path, infos: render_error('resources_unlinked_account')
      end
    end
  end

  def current_resource
    nil
  end

end