module Redirect
	extend ActiveSupport::Concern

	included do
    helper_method :store_location
  end

	# Store the current url in session's variable
  # 
  # * *Args*    :
  # 
  # * *Returns* :
  #
  def store_location
    cookies[:return_to] = request.fullpath
  end

  # Redirect the user to the stored url or the default one provided
  # 
  # * *Args*    :
  #   - default path to redirect to
  # * *Returns* :
  #
  def redirect_back_or(default, message = nil)
    redirect_to(cookies[:return_to] || default, message)
    cookies.delete(:return_to)
  end

end