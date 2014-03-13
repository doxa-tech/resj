class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # add different types of flash messages
  add_flash_types :error, :success, :notice
  
  include SessionsHelper

  def current_permission
		@current_permission ||= Permission.new(current_user)
	end

	helper_method :current_permission, :store_location

  def track_activity(trackable, action = params[:action])
  	Activity.create! action: action, trackable: trackable, user: current_user
	end

  def connected?
    if !current_user
      store_location
      redirect_to connexion_path, error: "Please log in"
    end
  end

  def authorize_create
    if !current_permission.allow_create?(params[:controller])
      redirect_to root_path, error: "Not authorize"
    end
  end

  def authorize_modify
    if !current_permission.allow_modify?(params[:controller], params[:action], current_resource)
      redirect_to root_path, error: "Not authorize"
    end
  end

  def authorize_action
    if !current_permission.allow_action?(params[:controller], params[:action], current_resource)
      redirect_to root_path, error: "Not authorize"
    end
  end

  # Store the current url in session's variable
  # 
  # * *Args*    :
  # 
  # * *Returns* :
  #
  def store_location
    session[:return_to] = request.fullpath
  end

  # Redirect the user to the stored url or the default one provided
  # 
  # * *Args*    :
  #   - default path to redirect to
  # * *Returns* :
  #
  def redirect_back_or(default, message = nil)
    redirect_to(session[:return_to] || default, message)
    session.delete(:return_to)
  end

  def replace_responsable(user, card)
    responsable = Responsable.find_by_email(user.email)
    CardResponsable.find_by_card_id_and_responsable_id(card.id, responsable.try(:id)).try(:destroy)
  end
end
