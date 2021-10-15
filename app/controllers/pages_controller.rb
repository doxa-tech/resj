class PagesController < ApplicationController

  def home
    flash.now[:error] = "Nom d'utilisateur et/ou mot de passe incorrect(s)"
  end

  def resj
  end

  def faq
  end

end
