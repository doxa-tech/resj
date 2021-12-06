class PagesController < ApplicationController

  layout "admin", only: [:orator_update_profile, :legal]

  def home
  end

  def resj
  end

  def faq
  end

  def legal
  end

  # temporary page for orators to update or remove their profile.
  def orator_update_profile
    user = User.find_by_remember_token(params[:remember_token])
    @orator = user.try(:orator)
    unless @orator.nil?
      sign_in(user)
    else
      raise Adeia::AccessDenied
    end
  end

end
