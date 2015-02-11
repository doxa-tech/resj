module PermissionFilter
	extend ActiveSupport::Concern

	included do
    helper_method :current_permission
  end

  def connected?
    if !current_user
      store_location
      redirect_to connexion_path, error: render_error('login')
    end
  end

	def current_permission
		@current_permission ||= Permission.new(current_user)
	end

  def authorize_index
    PermissionAccess.new(self, params[:controller], params[:action], current_resource).authorize_index
  end

  def authorize_create
    PermissionAccess.new(self, params[:controller], params[:action], current_resource).authorize(:create)
  end

  def authorize_modify
    PermissionAccess.new(self, params[:controller], params[:action], current_resource).authorize(:modify)
  end

  def authorize_action
    PermissionAccess.new(self, params[:controller], params[:action], current_resource).authorize(:action)
  end

  def authorize_resource
    PermissionAccess.new(self, 'resources', 'index', current_resource).authorize_resource
  end

  def current_resource
    nil
  end

end