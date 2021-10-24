class ApplicationController < ActionController::Base
  include ExceptionsHandler
  include SessionsHelper

  protect_from_forgery with: :exception

  add_flash_types :success, :error

end
