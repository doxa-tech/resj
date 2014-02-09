class Admin::BaseController < ApplicationController
	layout 'admin'
	before_action :authorize_read
	before_action :authorize_create, only: [:new, :create]
	before_action :authorize_modify, only: [:edit, :update, :destroy]

	def current_permission
		@current_permission ||= Permission.new(current_user)
	end

	helper_method :current_permission

	private

	def authorize_read
		if !current_user
			redirect_to root_path, error: "Please log in"
		end
	end

	def authorize_create
		if !current_user || !current_permission.allow_create?(params[:controller])
			redirect_to root_path, error: "Not authorize"
		end
	end

	def authorize_modify
		if !current_user || !current_permission.allow_modify?(params[:controller], params[:action], current_resource)
			redirect_to root_path, error: "Not authorize"
		end
	end

	def authorize_action
		if !current_user || !current_permission.allow_action?(params[:controller], params[:action], current_resource)
			redirect_to root_path, error: "Not authorize"
		end
	end
end
