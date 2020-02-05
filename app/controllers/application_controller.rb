class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  add_flash_types :success, :error

  def check_if_signed_in
    redirect_to signin_path, error: "Merci de te connecter avec ton compte Réseau Jeunesse" unless signed_in?
  end

end
