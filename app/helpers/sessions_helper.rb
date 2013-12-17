module SessionsHelper

	# Sign in a user with a cookie (remove on browser close)
	# 
	# * *Args*		:
	# 	- a user to sign in
	# * *Returns*	:
	#
	def sign_in(user)
		cookies[:remember_token] = user.remember_token
		self.current_user = user
	end

	# Sign in a user with a cookie (remove after 2 months)
	# 
	# * *Args*		:
	# 	- a user to sign in
	# * *Returns*	:
	#
	def sign_in_permanent(user)
		cookies[:remember_token] = { value: user.remember_token, expires: Time.now + 2592000 }
		self.current_user = user
	end

	def current_user=(user)
		@current_user = user
	end

	# Provid the user currently signed in.
	# 
	# * *Returns*	:
	# 	- the user currently signed in
	def current_user
		@current_user ||= User.find_by_remember_token(cookies[:remember_token])
	end


	# Check if there is a user signed in.
	# 
	# * *Returns*	:
	# 	- true or false
	def signed_in?
		!current_user.nil?
	end

	# Sign out a user by removing the cookie.
	def sign_out
		self.current_user = nil
		cookies.delete(:remember_token)
	end

end