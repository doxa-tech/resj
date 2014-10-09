class ApplicationController < ActionController::Base
  include SessionsHelper
  include PermissionFilter
  include Redirect

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # add different types of flash messages
  add_flash_types :error, :success, :notice, :infos

  before_action :set_locale, :on_ajax

  rescue_from ActionController::InvalidAuthenticityToken do |exception|
    respond_to do |format|
      format.html { render 'application/rescue/invalid_authenticity_token.html', layout: 'application' }
      format.js { render 'application/rescue/invalid_authenticity_token.js' }
    end
  end

  def default_url_options(options={})
    locale = I18n.locale
    { locale: (locale == :fr ? nil : locale), access: params[:access] }
  end

  def track_activity(trackable, action = params[:action], controller = params[:controller])
    if !trackable.nil? && !trackable.changed?
  	 Activity.create! action: action, controller: controller, trackable: trackable, user: current_user
    end
	end

  def render_error(error)
    render_to_string("application/errors/#{error}", layout: false).html_safe
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def on_ajax
    js false if request.xhr?
  end

end
