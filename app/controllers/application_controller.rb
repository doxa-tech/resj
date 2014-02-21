class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # add different types of flash messages
  add_flash_types :error, :success, :notice
  include SessionsHelper

  def track_activity(trackable, action = params[:action])
  	Activity.create! action: action, trackable: trackable, user: current_user
	end
end
