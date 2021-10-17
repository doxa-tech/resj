class ApplicationController < ActionController::Base
  include ExceptionsHandler

  protect_from_forgery with: :exception

  add_flash_types :success, :error

  def require_loggout
    redirect_to profile_path, success: "Tu es déjà connecté" if signed_in?
  end

end
