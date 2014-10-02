class ApplicationController < ActionController::Base
  include SessionsHelper
  include PermissionFilter

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # add different types of flash messages
  add_flash_types :error, :success, :notice, :infos

  before_action :set_locale, :on_ajax

  rescue_from ActionController::InvalidAuthenticityToken do |exception|
    respond_to do |format|
      format.html { render 'invalid_authenticity_token.html', layout: 'application' }
      format.js { render 'invalid_authenticity_token.js' }
    end
  end

  def default_url_options(options={})
    locale = I18n.locale
    { locale: (locale == :fr ? nil : locale), access: params[:access] }
  end
 
	helper_method :store_location

  def track_activity(trackable, action = params[:action], controller = params[:controller])
    if !trackable.nil? && !trackable.changed?
  	 Activity.create! action: action, controller: controller, trackable: trackable, user: current_user unless trackable.changed?
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

  def render_error(error)
    render_to_string("application/errors/#{error}", layout: false).html_safe
  end

  def search(model, fields)
    @search = model.search do 
      fulltext params[:query], fields: fields
      paginate page: params[:page] if params[:page]
    end
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def on_ajax
    js false if request.xhr?
  end

end
