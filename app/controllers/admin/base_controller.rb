class Admin::BaseController < ApplicationController
	layout "admin"
	before_action :connected_or_token?
	before_action :authorize_create, only: [:new, :create]
	before_action :authorize_modify, only: [:edit, :update, :destroy]
end
