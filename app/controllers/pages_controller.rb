class PagesController < ApplicationController

  layout "admin", only: :orator_update_profile

  def home
  end

  def resj
  end

  def faq
  end

  def error
    status = params[:code] || 500
    render status.to_s, status: status, layout: "admin"
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
