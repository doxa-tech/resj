module ExceptionsHandler

  extend ActiveSupport::Concern

  included do

    rescue_from Adeia::AccessDenied do |exception|
      respond_to do |format|
        format.html do
          redirect_to "/profile", error: "Accès non authorisé"
        end
        format.all { head :forbidden }
      end
    end

    rescue_from Adeia::LoginRequired do |exception|
      respond_to do |format|
        format.html do
          redirect_to "/signin", error: "Connecte-toi avant d'accéder à cette page"
        end
        format.all { head :unauthorized }
      end
    end

  end

end