module SessionsHelper

  def user
    @user ||= User.where("lower(email) = ?", params[:session][:email].strip.downcase).first
  end

  def require_confirmed
		if user && !user.confirmed
		  redirect_to root_path, error: render_to_string("application/unconfirmed", layout: false)
		end
	end

  def require_loggout
    redirect_to profile_path, success: "Tu es déjà connecté" if signed_in?
  end

end